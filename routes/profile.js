const express = require('express');
const _ = require('lodash');
const carto = require('../utils/carto');
const Selection = require('../models/selection');
const buildProfileSQL = require('../query-helpers/profile');
const buildDecennialSQL = require('../query-helpers/decennial');
const tableConfigs = require('../table-config');
const delegateAggregator = require('../utils/delegate-aggregator');
const nestProfile = require('../utils/nest-profile');

const router = express.Router();
const {
  get, set, camelCase, find, merge,
} = _;

const tableNames = [
  'population_density',
  'sex_age',
  'mutually_exclusive_race',
  'hispanic_subgroup',
  'asian_subgroup',
  'relationship_head_householder',
  'household_type',
  'housing_occupancy',
  'housing_tenure',
  'tenure_by_age',
  'household_size',
];

router.get('/:id/decennial', (req, res) => {
  const { id: _id } = req.params;
  Selection.findOne({ _id })
    .then((match) => {
      // match.geoids is an array of geoids to query with
      const apiCalls = tableNames.map((tableName) => { // eslint-disable-line
        return carto.SQL(buildDecennialSQL(`decennial_${tableName}`, match.geoids, 0));
      });

      Promise.all(apiCalls)
        .then((responses) => {
          res.send(responses.reduce((a, b) => a.concat(b)));
        });
    });
});

router.get('/:id/:profile', (req, res) => {
  const { id: _id, profile } = req.params;
  Selection.findOne({ _id })
    .then((match) => {
      // match.geoids is an array of geoids to query with
      carto.SQL(buildProfileSQL(profile, match.geoids, 0), 'json', 'post')
        .then((data) => {
          const fullDataset = nestProfile(data, 'dataset', 'variable');

          return data
            .map((row) => {
              let rowWithConfig = row;
              const { category, variable, dataset } = row;
              const categoryNormalized = camelCase(category);
              const variables = get(tableConfigs, `${profile}.${categoryNormalized}`) || [];
              rowWithConfig.rowConfig = find(variables, ['data', variable]) || {};
              rowWithConfig.special = !!get(rowWithConfig, 'rowConfig.special');

              // if the row is "special" and the number of geoids in the
              // selection are greater than 1
              // then, delete the unneeded special calculations data
              if (rowWithConfig.special && (match.geoids.length > 1)) {
                const currentYear = get(fullDataset, dataset);
                const newRowObject = delegateAggregator(rowWithConfig, rowWithConfig.rowConfig, currentYear);
                rowWithConfig = merge(newRowObject, rowWithConfig);
              }

              return rowWithConfig;
            })
            .map((row) => {
              if (row.special) {
                set(row, 'rowConfig.specialCalculations', null);
              }
              return row;
            });
        })
        .then((data) => {
          res.send(data);
        });
    });
});

module.exports = router;

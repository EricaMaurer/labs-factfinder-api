const interpolate = require('../../utils/interpolate');
const formula = require('../../utils/formula');
const calculateMedianError = require('../../utils/calculate-median-error');

module.exports = [
  {
    title: 'Median earnings for workers (dollars)',
    tooltip: 'Medians are calculated using linear interpolation, which may result in top- and bottom-coded values',
    variable: 'mdewrk',
    special: true,
    specialCalculations: [
      {
        column: 'sum',
        aggregator: interpolate,
        options: {
          bins: [
            ['ernu2pt5k', [0, 2499]],
            ['ern2pt5t5', [2500, 4999]],
            ['ern5t7pt5', [5000, 7499]],
            ['e7pt5t10', [7500, 9999]],
            ['e10t12pt5', [10000, 12499]],
            ['e12pt5t15', [12500, 14999]],
            ['e15t17pt5', [15000, 17499]],
            ['e17pt5t20', [17500, 19999]],
            ['e20t22pt5', [20000, 22499]],
            ['e22pt5t25', [22500, 24999]],
            ['ern25t30', [25000, 29999]],
            ['ern30t35', [30000, 34999]],
            ['ern35t40', [35000, 39999]],
            ['ern40t45', [40000, 44999]],
            ['ern45t50', [45000, 49999]],
            ['ern50t55', [50000, 54999]],
            ['ern55t65', [55000, 64999]],
            ['ern65t75', [65000, 74999]],
            ['ern75t100', [75000, 99999]],
            ['ern100pl', [100000, 250000]],
          ],
        },
      },
      {
        column: 'm',
        aggregator: calculateMedianError,
        options: {
          designFactor: 1.6,
          bins: [
            ['ernu2pt5k', [0, 2499]],
            ['ern2pt5t5', [2500, 4999]],
            ['ern5t7pt5', [5000, 7499]],
            ['e7pt5t10', [7500, 9999]],
            ['e10t12pt5', [10000, 12499]],
            ['e12pt5t15', [12500, 14999]],
            ['e15t17pt5', [15000, 17499]],
            ['e17pt5t20', [17500, 19999]],
            ['e20t22pt5', [20000, 22499]],
            ['e22pt5t25', [22500, 24999]],
            ['ern25t30', [25000, 29999]],
            ['ern30t35', [30000, 34999]],
            ['ern35t40', [35000, 39999]],
            ['ern40t45', [40000, 44999]],
            ['ern45t50', [45000, 49999]],
            ['ern50t55', [50000, 54999]],
            ['ern55t65', [55000, 64999]],
            ['ern65t75', [65000, 74999]],
            ['ern75t100', [75000, 99999]],
            ['ern100pl', [100000, 250000]],
          ],
        },
      },
      {
        column: 'cv',
        aggregator: formula,
        options: {
          formula: '((GET("mdewrk.m")/ 1.645) / GET("mdewrk.sum") * 100)',
        },
      },
      {
        column: 'comparison_sum',
        aggregator: interpolate,
        options: {
          bins: [
            ['ernu2pt5k', [0, 2499]],
            ['ern2pt5t5', [2500, 4999]],
            ['ern5t7pt5', [5000, 7499]],
            ['e7pt5t10', [7500, 9999]],
            ['e10t12pt5', [10000, 12499]],
            ['e12pt5t15', [12500, 14999]],
            ['e15t17pt5', [15000, 17499]],
            ['e17pt5t20', [17500, 19999]],
            ['e20t22pt5', [20000, 22499]],
            ['e22pt5t25', [22500, 24999]],
            ['ern25t30', [25000, 29999]],
            ['ern30t35', [30000, 34999]],
            ['ern35t40', [35000, 39999]],
            ['ern40t45', [40000, 44999]],
            ['ern45t50', [45000, 49999]],
            ['ern50t55', [50000, 54999]],
            ['ern55t65', [55000, 64999]],
            ['ern65t75', [65000, 74999]],
            ['ern75t100', [75000, 99999]],
            ['ern100pl', [100000, 250000]],
          ],
        },
      },
      {
        column: 'comparison_m',
        aggregator: calculateMedianError,
        options: {
          designFactor: 1.6,
          bins: [
            ['ernu2pt5k', [0, 2499]],
            ['ern2pt5t5', [2500, 4999]],
            ['ern5t7pt5', [5000, 7499]],
            ['e7pt5t10', [7500, 9999]],
            ['e10t12pt5', [10000, 12499]],
            ['e12pt5t15', [12500, 14999]],
            ['e15t17pt5', [15000, 17499]],
            ['e17pt5t20', [17500, 19999]],
            ['e20t22pt5', [20000, 22499]],
            ['e22pt5t25', [22500, 24999]],
            ['ern25t30', [25000, 29999]],
            ['ern30t35', [30000, 34999]],
            ['ern35t40', [35000, 39999]],
            ['ern40t45', [40000, 44999]],
            ['ern45t50', [45000, 49999]],
            ['ern50t55', [50000, 54999]],
            ['ern55t65', [55000, 64999]],
            ['ern65t75', [65000, 74999]],
            ['ern75t100', [75000, 99999]],
            ['ern100pl', [100000, 250000]],
          ],
        },
      },
      {
        column: 'comparison_cv',
        aggregator: formula,
        options: {
          formula: '((GET("mdewrk.comparison_m")/ 1.645) / GET("mdewrk.comparison_sum") * 100)',
        },
      },
    ],
  },
  {
    title: 'Median earnings for male full-time, year-round workers (dollars)',
    tooltip: 'Medians are calculated using linear interpolation, which may result in top- and bottom-coded values',
    variable: 'mdemftwrk',
    special: true,
    specialCalculations: [
      {
        column: 'sum',
        aggregator: interpolate,
        options: {
          bins: [
            ['mftu2pt5k', [0, 2499]],
            ['mft2p5t5', [2500, 4999]],
            ['mft5t7p5', [5000, 7499]],
            ['mft7p5t10', [7500, 9999]],
            ['mf10t12p5', [10000, 12499]],
            ['mf12p5t15', [12500, 14999]],
            ['mf15t17p5', [15000, 17499]],
            ['mf17p5t20', [17500, 19999]],
            ['mf20t22p5', [20000, 22499]],
            ['mf22p5t25', [22500, 24999]],
            ['mft25t30', [25000, 29999]],
            ['mft30t35', [30000, 34999]],
            ['mft35t40', [35000, 39999]],
            ['mft40t45', [40000, 44999]],
            ['mft45t50', [45000, 49999]],
            ['mft50t55', [50000, 54999]],
            ['mft55t65', [55000, 64999]],
            ['mft65t75', [65000, 74999]],
            ['mft75t100', [75000, 99999]],
            ['mft100pl', [100000, 250000]],
          ],
        },
      },
      {
        column: 'm',
        aggregator: calculateMedianError,
        options: {
          designFactor: 1.6,
          bins: [
            ['mftu2pt5k', [0, 2499]],
            ['mft2p5t5', [2500, 4999]],
            ['mft5t7p5', [5000, 7499]],
            ['mft7p5t10', [7500, 9999]],
            ['mf10t12p5', [10000, 12499]],
            ['mf12p5t15', [12500, 14999]],
            ['mf15t17p5', [15000, 17499]],
            ['mf17p5t20', [17500, 19999]],
            ['mf20t22p5', [20000, 22499]],
            ['mf22p5t25', [22500, 24999]],
            ['mft25t30', [25000, 29999]],
            ['mft30t35', [30000, 34999]],
            ['mft35t40', [35000, 39999]],
            ['mft40t45', [40000, 44999]],
            ['mft45t50', [45000, 49999]],
            ['mft50t55', [50000, 54999]],
            ['mft55t65', [55000, 64999]],
            ['mft65t75', [65000, 74999]],
            ['mft75t100', [75000, 99999]],
            ['mft100pl', [100000, 250000]],
          ],
        },
      },
      {
        column: 'cv',
        aggregator: formula,
        options: {
          formula: '((GET("mdemftwrk.m")/ 1.645) / GET("mdemftwrk.sum") * 100)',
        },
      },
      {
        column: 'comparison_sum',
        aggregator: interpolate,
        options: {
          bins: [
            ['mftu2pt5k', [0, 2499]],
            ['mft2p5t5', [2500, 4999]],
            ['mft5t7p5', [5000, 7499]],
            ['mft7p5t10', [7500, 9999]],
            ['mf10t12p5', [10000, 12499]],
            ['mf12p5t15', [12500, 14999]],
            ['mf15t17p5', [15000, 17499]],
            ['mf17p5t20', [17500, 19999]],
            ['mf20t22p5', [20000, 22499]],
            ['mf22p5t25', [22500, 24999]],
            ['mft25t30', [25000, 29999]],
            ['mft30t35', [30000, 34999]],
            ['mft35t40', [35000, 39999]],
            ['mft40t45', [40000, 44999]],
            ['mft45t50', [45000, 49999]],
            ['mft50t55', [50000, 54999]],
            ['mft55t65', [55000, 64999]],
            ['mft65t75', [65000, 74999]],
            ['mft75t100', [75000, 99999]],
            ['mft100pl', [100000, 250000]],
          ],
        },
      },
      {
        column: 'comparison_m',
        aggregator: calculateMedianError,
        options: {
          designFactor: 1.6,
          bins: [
            ['mftu2pt5k', [0, 2499]],
            ['mft2p5t5', [2500, 4999]],
            ['mft5t7p5', [5000, 7499]],
            ['mft7p5t10', [7500, 9999]],
            ['mf10t12p5', [10000, 12499]],
            ['mf12p5t15', [12500, 14999]],
            ['mf15t17p5', [15000, 17499]],
            ['mf17p5t20', [17500, 19999]],
            ['mf20t22p5', [20000, 22499]],
            ['mf22p5t25', [22500, 24999]],
            ['mft25t30', [25000, 29999]],
            ['mft30t35', [30000, 34999]],
            ['mft35t40', [35000, 39999]],
            ['mft40t45', [40000, 44999]],
            ['mft45t50', [45000, 49999]],
            ['mft50t55', [50000, 54999]],
            ['mft55t65', [55000, 64999]],
            ['mft65t75', [65000, 74999]],
            ['mft75t100', [75000, 99999]],
            ['mft100pl', [100000, 250000]],
          ],
        },
      },
      {
        column: 'comparison_cv',
        aggregator: formula,
        options: {
          formula: '((GET("mdemftwrk.comparison_m")/ 1.645) / GET("mdemftwrk.comparison_sum") * 100)',
        },
      },
    ],
  },
  {
    title: 'Median earnings for female full-time, year-round workers (dollars)',
    tooltip: 'Medians are calculated using linear interpolation, which may result in top- and bottom-coded values',
    variable: 'mdefftwrk',
    special: true,
    specialCalculations: [
      {
        column: 'sum',
        aggregator: interpolate,
        options: {
          bins: [
            ['fftu2pt5k', [0, 2499]],
            ['fft2p5t5', [2500, 4999]],
            ['fft5t7p5', [5000, 7499]],
            ['fft7p5t10', [7500, 9999]],
            ['ff10t12p5', [10000, 12499]],
            ['ff12p5t15', [12500, 14999]],
            ['ff15t17p5', [15000, 17499]],
            ['ff17p5t20', [17500, 19999]],
            ['ff20t22p5', [20000, 22499]],
            ['ff22p5t25', [22500, 24999]],
            ['fft25t30', [25000, 29999]],
            ['fft30t35', [30000, 34999]],
            ['fft35t40', [35000, 39999]],
            ['fft40t45', [40000, 44999]],
            ['fft45t50', [45000, 49999]],
            ['fft50t55', [50000, 54999]],
            ['fft55t65', [55000, 64999]],
            ['fft65t75', [65000, 74999]],
            ['fft75t100', [75000, 99999]],
            ['fft100pl', [100000, 250000]],
          ],
        },
      },
      {
        column: 'm',
        aggregator: calculateMedianError,
        options: {
          designFactor: 1.6,
          bins: [
            ['fftu2pt5k', [0, 2499]],
            ['fft2p5t5', [2500, 4999]],
            ['fft5t7p5', [5000, 7499]],
            ['fft7p5t10', [7500, 9999]],
            ['ff10t12p5', [10000, 12499]],
            ['ff12p5t15', [12500, 14999]],
            ['ff15t17p5', [15000, 17499]],
            ['ff17p5t20', [17500, 19999]],
            ['ff20t22p5', [20000, 22499]],
            ['ff22p5t25', [22500, 24999]],
            ['fft25t30', [25000, 29999]],
            ['fft30t35', [30000, 34999]],
            ['fft35t40', [35000, 39999]],
            ['fft40t45', [40000, 44999]],
            ['fft45t50', [45000, 49999]],
            ['fft50t55', [50000, 54999]],
            ['fft55t65', [55000, 64999]],
            ['fft65t75', [65000, 74999]],
            ['fft75t100', [75000, 99999]],
            ['fft100pl', [100000, 250000]],
          ],
        },
      },
      {
        column: 'cv',
        aggregator: formula,
        options: {
          formula: '((GET("mdefftwrk.m")/ 1.645) / GET("mdefftwrk.sum") * 100)',
        },
      },
      {
        column: 'comparison_sum',
        aggregator: interpolate,
        options: {
          bins: [
            ['fftu2pt5k', [0, 2499]],
            ['fft2p5t5', [2500, 4999]],
            ['fft5t7p5', [5000, 7499]],
            ['fft7p5t10', [7500, 9999]],
            ['ff10t12p5', [10000, 12499]],
            ['ff12p5t15', [12500, 14999]],
            ['ff15t17p5', [15000, 17499]],
            ['ff17p5t20', [17500, 19999]],
            ['ff20t22p5', [20000, 22499]],
            ['ff22p5t25', [22500, 24999]],
            ['fft25t30', [25000, 29999]],
            ['fft30t35', [30000, 34999]],
            ['fft35t40', [35000, 39999]],
            ['fft40t45', [40000, 44999]],
            ['fft45t50', [45000, 49999]],
            ['fft50t55', [50000, 54999]],
            ['fft55t65', [55000, 64999]],
            ['fft65t75', [65000, 74999]],
            ['fft75t100', [75000, 99999]],
            ['fft100pl', [100000, 250000]],
          ],
        },
      },
      {
        column: 'comparison_m',
        aggregator: calculateMedianError,
        options: {
          designFactor: 1.6,
          bins: [
            ['fftu2pt5k', [0, 2499]],
            ['fft2p5t5', [2500, 4999]],
            ['fft5t7p5', [5000, 7499]],
            ['fft7p5t10', [7500, 9999]],
            ['ff10t12p5', [10000, 12499]],
            ['ff12p5t15', [12500, 14999]],
            ['ff15t17p5', [15000, 17499]],
            ['ff17p5t20', [17500, 19999]],
            ['ff20t22p5', [20000, 22499]],
            ['ff22p5t25', [22500, 24999]],
            ['fft25t30', [25000, 29999]],
            ['fft30t35', [30000, 34999]],
            ['fft35t40', [35000, 39999]],
            ['fft40t45', [40000, 44999]],
            ['fft45t50', [45000, 49999]],
            ['fft50t55', [50000, 54999]],
            ['fft55t65', [55000, 64999]],
            ['fft65t75', [65000, 74999]],
            ['fft75t100', [75000, 99999]],
            ['fft100pl', [100000, 250000]],
          ],
        },
      },
      {
        column: 'comparison_cv',
        aggregator: formula,
        options: {
          formula: '((GET("mdefftwrk.comparison_m")/ 1.645) / GET("mdefftwrk.comparison_sum") * 100)',
        },
      },
    ],
  },
];

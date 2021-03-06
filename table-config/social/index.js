// @create-index

const ancestry = require('./ancestry');
const uSCitizenshipStatus = require('./u-s--citizenship-status');
const disabilityStatusOfTheCivilianNoninstitutionalizedPopulation = require('./disability-status-of-the-civilian-noninstitutionalized-population');
const educationalAttainmentHighestGradeCompleted = require('./educational-attainment--highest-grade-completed');
const grandparents = require('./grandparents');
const householdType = require('./household-type');
const languageSpokenAtHome = require('./language-spoken-at-home');
const maritalStatus = require('./marital-status');
const placeOfBirth = require('./place-of-birth');
const relationshipToHeadOfHouseholdHouseholder = require('./relationship-to-head-of-household--householder');
const residence1YearAgo = require('./residence-1-year-ago');
const schoolEnrollment = require('./school-enrollment');
const veteranStatus = require('./veteran-status');
const yearOfEntry = require('./year-of-entry');

module.exports = {
  ancestry,
  uSCitizenshipStatus,
  disabilityStatusOfTheCivilianNoninstitutionalizedPopulation,
  educationalAttainmentHighestGradeCompleted,
  grandparents,
  householdType,
  languageSpokenAtHome,
  maritalStatus,
  placeOfBirth,
  relationshipToHeadOfHouseholdHouseholder,
  residence1YearAgo,
  schoolEnrollment,
  veteranStatus,
  yearOfEntry,
};

/* Creates */
const addStrikeReportCreate = require('./src/creates/add-strike-report');
const processAllMorDataCreate = require('./src/creates/process-all-mor-data');
const updateStrikeReportCreate = require('./src/creates/update-strike-report');
const uploadImageCreate = require('./src/creates/upload-image');

/* Triggers */
const airCraftTrigger = require('./src/triggers/air-craft');
const airportTrigger = require('./src/triggers/airport');
const effectTrigger = require('./src/triggers/effect');
const imagesAsBytesTrigger = require('./src/triggers/images-as-bytes');
const operatorTrigger = require('./src/triggers/operator');
const phaseOfFlightTrigger = require('./src/triggers/phase-of-flight');
const precipitationTrigger = require('./src/triggers/precipitation');
const skyConditionTrigger = require('./src/triggers/sky-condition');
const speciesNumberTrigger = require('./src/triggers/species-number');
const speciesSizeTrigger = require('./src/triggers/species-size');

/* Authentication */
const {
    config: authentication,
    befores = [],
    afters = [],
} = require('./src/auth/authentication');

module.exports = {
    // This is just shorthand to reference the installed dependencies you have.
    // Zapier will need to know these before we can upload.
    version: require('./package.json').version,
    platformVersion: require('zapier-platform-core').version,

    authentication,
    beforeRequest: [...befores],
    afterResponse: [...afters],

    // If you want your trigger to show up, you better include it here!
    triggers: {
        [airportTrigger.key]: airportTrigger,
        [airCraftTrigger.key]: airCraftTrigger,
        [effectTrigger.key]: effectTrigger,
        [imagesAsBytesTrigger.key]: imagesAsBytesTrigger,
        [operatorTrigger.key]: operatorTrigger,
        [phaseOfFlightTrigger.key]: phaseOfFlightTrigger,
        [precipitationTrigger.key]: precipitationTrigger,
        [skyConditionTrigger.key]: skyConditionTrigger,
        [speciesNumberTrigger.key]: speciesNumberTrigger,
        [speciesSizeTrigger.key]: speciesSizeTrigger,
    },

    // If you want your searches to show up, you better include it here!
    searches: {},

    // If you want your creates to show up, you better include it here!
    creates: {
        [addStrikeReportCreate.key]: addStrikeReportCreate,
        [processAllMorDataCreate.key]: processAllMorDataCreate,
        [updateStrikeReportCreate.key]: updateStrikeReportCreate,
        [uploadImageCreate.key]: uploadImageCreate,
    },

    resources: {},
};

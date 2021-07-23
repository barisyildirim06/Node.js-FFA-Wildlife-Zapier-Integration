const fetch = require('node-fetch');
const env = require('../../env');
const { strikeReportParams, strikeReportInputFields } = require('../schemas/add-strike-report');

const ffaWildLifeIntegration = (z, bundle) => {

    return fetch(`${env.apiServer}/AddStrikeReport`, {
        method: 'POST',
        body: JSON.stringify(strikeReportParams(bundle)),
        headers: {
            'content-type': 'application/json',
            'token': bundle.authData.token,
            'clientID': bundle.authData.clientID,
        }
    }).then(response => response.json());
}
module.exports = {
    key: 'addStrikeReport',

    // You'll want to provide some helpful display labels and descriptions
    // for users. Zapier will put them into the UX.
    noun: 'Add Strike Report',
    display: {
        label: 'Add Strike Report',
        description: 'Adds Strike Report',
    },

    // `operation` is where the business logic goes.
    operation: {
        perform: ffaWildLifeIntegration,
        inputFields : strikeReportInputFields
    }
}
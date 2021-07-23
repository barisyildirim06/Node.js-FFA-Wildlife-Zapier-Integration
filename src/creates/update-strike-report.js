const fetch = require('node-fetch');
const env = require('../../env');
const { strikeReportParams, strikeReportInputFields } = require('../schemas/update-strike-report');

const ffaWildLifeIntegration = (z, bundle) => {

    return fetch(`${env.apiServer}/UpdateStrikeReport`, {
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
    key: 'updateStrikeReport',

    // You'll want to provide some helpful display labels and descriptions
    // for users. Zapier will put them into the UX.
    noun: 'Update Strike Report',
    display: {
        label: 'Update Strike Report',
        description: 'Updates Strike Report',
    },

    // `operation` is where the business logic goes.
    operation: {
        perform: ffaWildLifeIntegration,
        inputFields : strikeReportInputFields
    }
}
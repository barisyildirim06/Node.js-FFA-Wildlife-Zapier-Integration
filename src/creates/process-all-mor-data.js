const fetch = require('node-fetch');
const env = require('../../env');
const { params, inputFields } = require('../schemas/process-all-mor-data');

const ffaWildLifeIntegration = (z, bundle) => {

    return fetch(`${env.apiServer}/ProcessAllMorData?hasFirstBatch=${bundle.inputData.hasFirstBatch}&userName=${bundle.inputData.userName}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'token': bundle.authData.token,
            'clientID': bundle.authData.clientID,
        }
    }).then(response => response.json());
}
module.exports = {
    key: 'processAllMorData',

    // You'll want to provide some helpful display labels and descriptions
    // for users. Zapier will put them into the UX.
    noun: 'Process all mor data',
    display: {
        label: 'Process all mor data',
        description: 'Process all mor data',
    },

    // `operation` is where the business logic goes.
    operation: {
        perform: ffaWildLifeIntegration,
        inputFields
    }
}
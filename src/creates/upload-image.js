const fetch = require('node-fetch');
const env = require('../../env');
const { params, inputFields } = require('../schemas/upload-image');

const ffaWildLifeIntegration = (z, bundle) => {

    return fetch(`${env.apiServer}/UploadImage`, {
        method: 'POST',
        body: JSON.stringify(params(bundle)),
        headers: {
            'content-type': 'application/json',
            'token': bundle.authData.token,
            'clientID': bundle.authData.clientID,
        }
    }).then(response => response.json());
}
module.exports = {
    key: 'uploadImage',

    // You'll want to provide some helpful display labels and descriptions
    // for users. Zapier will put them into the UX.
    noun: 'uploadImage',
    display: {
        label: 'Upload Image',
        description: 'Upload Image To Database. This method is only used for Update Strike report',
    },

    // `operation` is where the business logic goes.
    operation: {
        perform: ffaWildLifeIntegration,
        inputFields
    }
}
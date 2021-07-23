const env = require('../../env');

const listSpeciesNumber = async (z, bundle) => {
    const speciesNumberGetRequest = await z.request({
        url: `${env.apiServer}/GetSpeciesNumberList`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'token': bundle.authData.token,
            'clientID': bundle.authData.clientID,
        },
        params: {}
    })

    // You can do any parsing you need for results here before returning them
    const filteredSpeciesNumberData = speciesNumberGetRequest.json.map((data, index) => {
        return {
            ...data,
            id: data.SpeciesNumber_ID,
        }
    })
    return filteredSpeciesNumberData;
}

module.exports = {
    key: 'speciesNumber',
    noun: 'SpeciesNumber',
    display: {
        label: 'New Species Number Data',
        description: 'Triggers when new Species Number data is added'
    },
    operation: {
        perform: listSpeciesNumber
    }
}
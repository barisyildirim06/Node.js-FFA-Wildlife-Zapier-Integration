const env = require('../../env');

const listSpeciesSize = async (z, bundle) => {
    const speciesSizeGetRequest = await z.request({
        url: `${env.apiServer}/GetSpeciesSizeList`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'token': bundle.authData.token,
            'clientID': bundle.authData.clientID,
        },
        params: {}
    })

    // You can do any parsing you need for results here before returning them
    const filteredSpeciesSizeData = speciesSizeGetRequest.json.map((data, index) => {
        return {
            ...data,
            id: data.SpeciesSize_ID,
        }
    })
    return filteredSpeciesSizeData;
}

module.exports = {
    key: 'speciesSize',
    noun: 'SpeciesSize',
    display: {
        label: 'New Species Size Data',
        description: 'Triggers when new Species Size data is added'
    },
    operation: {
        perform: listSpeciesSize
    }
}
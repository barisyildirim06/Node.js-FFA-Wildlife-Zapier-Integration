const env = require('../../env');

const listPrecipitation = async (z, bundle) => {
    const precipitationGetRequest = await z.request({
        url: `${env.apiServer}/GetPrecipitationList`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'token': bundle.authData.token,
            'clientID': bundle.authData.clientID,
        },
        params: {}
    })

    // You can do any parsing you need for results here before returning them
    const filteredPrecipitationData = precipitationGetRequest.json.map((data, index) => {
        return {
            ...data,
            id: data.Precipitation_ID,
        }
    })
    return filteredPrecipitationData;
}

module.exports = {
    key: 'precipitation',
    noun: 'Precipitation',
    display: {
        label: 'New Precipitation Data',
        description: 'Triggers when new precipitation data is added'
    },
    operation: {
        perform: listPrecipitation
    }
}
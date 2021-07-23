const env = require('../../env');
const { inputFields } = require('../schemas/airport');

const listAirport = async (z, bundle) => {
    const airportGetRequest = await z.request({
        url: `${env.apiServer}/GetAirportList?startWith=${bundle.inputData.startWith}&hasSearch=${bundle.inputData.hasSearch}&role=${bundle.inputData.role}`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'token': bundle.authData.token,
            'clientID': bundle.authData.clientID,
        },
        params: {}
    })

    // You can do any parsing you need for results here before returning them
    const filteredAirportData = airportGetRequest.json.map((data, index) => {
        return {
            ...data,
            id: data.Airport_ID,
        }
    })
    return filteredAirportData;
}

module.exports = {
    key: 'airport',
    noun: 'Airport',
    display: {
        label: 'New Airport Data',
        description: 'Triggers when new airport data is added'
    },
    operation: {
        perform: listAirport,
        inputFields
    }
}
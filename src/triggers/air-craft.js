const env = require('../../env');

const listAirCraft = async (z, bundle) => {
    const airCraftGetRequest = await z.request({
        url: `${env.apiServer}/GetAirCraftList?startWith=${bundle.inputData.startWith}`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'token': bundle.authData.token,
            'clientID': bundle.authData.clientID,
        },
        params: {}
    })

    // You can do any parsing you need for results here before returning them
    const filteredAirCraftData = airCraftGetRequest.json.map((data, index) => {
        return {
            ...data,
            id: data.Aircraft_ID,
        }
    })
    return filteredAirCraftData;
}

module.exports = {
    key: 'airCraft',
    noun: 'AirCraft',
    display: {
        label: 'New AirCraft Data',
        description: 'Triggers when new air craft data is added'
    },
    operation: {
        perform: listAirCraft,
        inputFields: [
            {
                key: 'startWith',
                label: 'startWith as string, if startWith is empty it will return a whole list.',
                type: 'string',
            },
        ]
    }
}
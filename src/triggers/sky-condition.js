const env = require('../../env');

const listSkyCondition = async (z, bundle) => {
    const skyConditionGetRequest = await z.request({
        url: `${env.apiServer}/GetSkyConditionList`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'token': bundle.authData.token,
            'clientID': bundle.authData.clientID,
        },
        params: {}
    })

    // You can do any parsing you need for results here before returning them
    const filteredSkyConditionData = skyConditionGetRequest.json.map((data, index) => {
        return {
            ...data,
            id: data.SkyCondition_ID,
        }
    })
    return filteredSkyConditionData;
}

module.exports = {
    key: 'skyCondition',
    noun: 'SkyCondition',
    display: {
        label: 'New Sky Condition Data',
        description: 'Triggers when new Sky Condition data is added'
    },
    operation: {
        perform: listSkyCondition
    }
}
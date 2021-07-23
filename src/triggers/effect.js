const env = require('../../env');

const listEffect = async (z, bundle) => {
    const effectGetRequest = await z.request({
        url: `${env.apiServer}/GetEffectList`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'token': bundle.authData.token,
            'clientID': bundle.authData.clientID,
        },
        params: {}
    })

    // You can do any parsing you need for results here before returning them
    const filteredEffectData = effectGetRequest.json.map((data, index) => {
        return {
            ...data,
            id: data.Effect_ID,
        }
    })
    return filteredEffectData;
}

module.exports = {
    key: 'effect',
    noun: 'Effect',
    display: {
        label: 'New Effect Data',
        description: 'Triggers when new effect data is added'
    },
    operation: {
        perform: listEffect
    }
}
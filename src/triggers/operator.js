const env = require('../../env');

const listOperator = async (z, bundle) => {
    const operatorGetRequest = await z.request({
        url: `${env.apiServer}/GetOperatorList?startWith=${bundle.inputData.startWith}&hasSearch=${bundle.inputData.hasSearch}&role=${bundle.inputData.role}`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'token': bundle.authData.token,
            'clientID': bundle.authData.clientID,
        },
        params: {}
    })

    // You can do any parsing you need for results here before returning them
    const filteredOperatorData = operatorGetRequest.json.Result.map((data, index) => {
        return {
            ...data,
            id: data.Operator_ID,
        }
    })
    return filteredOperatorData;
}

module.exports = {
    key: 'operator',
    noun: 'Operator',
    display: {
        label: 'New Operator Data',
        description: 'Triggers when new operator data is added'
    },
    operation: {
        perform: listOperator,
        inputFields: [
            {
                key: 'startWith',
                label: 'startWith as string, if startWith is empty it will return a whole list.',
                type: 'string',
            },
            {
                key: 'role',
                label: 'role as string',
                type: 'string',
            },
            {
                key: 'hasSearch',
                label: 'Check if there is search',
                type: 'boolean',
            },
        ]
    }
}
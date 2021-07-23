const params = (bundle) => {
    return {
        hasFirstBatch: bundle.inputData.hasFirstBatch,
        userName: bundle.inputData.userName,
    }
}

const inputFields = [
    {
        key: 'hasFirstBatch',
        label: 'has First Batch',
        type: 'boolean',
    },
    {
        key: 'userName',
        label: 'User Name',
        type: 'string',
    },
]

module.exports = { params, inputFields };
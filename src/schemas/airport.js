const params = (bundle) => {
    return {
        'startWith': bundle.inputData.startWith,
        'hasSearch': bundle.inputData.hasSearch,
        'role': bundle.inputData.role
    }
}

const inputFields = [
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

module.exports = { params, inputFields };
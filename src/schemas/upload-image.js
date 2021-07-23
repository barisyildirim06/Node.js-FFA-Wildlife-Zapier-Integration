const params = (bundle) => {
    return {
        strikeImageId: bundle.inputData.strikeImageId,
    }
}

const inputFields = [
    {
        key: 'strikeImageId',
        label: 'Strike Image ID',
        type: 'integer',
    }
]

module.exports = { params, inputFields };
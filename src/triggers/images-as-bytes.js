const env = require('../../env');

const listImage = async (z, bundle) => {
    const imageGetRequest = await z.request({
        url: `${env.apiServer}/GetImageAsBytes`,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'token': bundle.authData.token,
            'clientID': bundle.authData.clientID,
        },
        params: {}
    })

    // You can do any parsing you need for results here before returning them
    const filteredImageData = imageGetRequest.json.map((data, index) => {
        return {
            ...data,
            id: data.ImageId,
        }
    })
    return filteredImageData;
}

module.exports = {
    key: 'image',
    noun: 'Image',
    display: {
        label: 'New Image Data',
        description: 'Triggers when new image is added'
    },
    operation: {
        perform: listImage
    }
}
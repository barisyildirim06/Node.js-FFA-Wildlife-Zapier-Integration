const env = require('../../env');

const listPhaseOfFlight = async (z, bundle) => {
    const phaseOfFlightGetRequest = await z.request({
        url: `${env.apiServer}/GetPhaseOfFlightList?role=${bundle.inputData.role}`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'token': bundle.authData.token,
            'clientID': bundle.authData.clientID,
        },
        params: {}
    })

    // You can do any parsing you need for results here before returning them
    const filteredPhaseOfFlightData = phaseOfFlightGetRequest.json.Result.map((data, index) => {
        return {
            ...data,
            id: data.Phase_of_Flight_ID,
        }
    })
    return filteredPhaseOfFlightData;
}

module.exports = {
    key: 'phaseOfFlight',
    noun: 'PhaseOfFlight',
    display: {
        label: 'New Phase of Flight Data',
        description: 'Triggers when new phase of flight data is added'
    },
    operation: {
        perform: listPhaseOfFlight,
        inputFields: [
            {
                key: 'role',
                label: 'role as string',
                type: 'string',
            },
        ]
    }
}
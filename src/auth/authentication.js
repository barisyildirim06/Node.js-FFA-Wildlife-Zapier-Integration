'use strict';
const env = require('../../env');

// You want to make a request to an endpoint that is either specifically designed
// to test auth, or one that every user will have access to. eg: `/me`.
// By returning the entire request object, you have access to the request and
// response data for testing purposes. Your connection label can access any data
// from the returned response using the `json.` prefix. eg: `{{json.username}}`.
const test = (z, bundle) =>
    z.request({
        url: `https://wildlife.faa.gov/home/?token={{bundle.authData.token}}&clientID={{bundle.authData.clientID}}`,
        method: 'POST'
});

// This function runs after every outbound request. You can use it to check for
// errors or modify the response. You can have as many as you need. They'll need
// to each be registered in your index.js file.
// const handleBadResponses = (response, z, bundle) => {
//   if (response.status === 401) {
//     throw new z.errors.Error(
//       // This message is surfaced to the user
//       'The API Key you supplied is incorrect',
//       'AuthenticationError',
//       response.status
//     );
//   }

//   return response;
// };

// This function runs before every outbound request. You can have as many as you
// need. They'll need to each be registered in your index.js file.
const addApiKeyToHeader = (request, z, bundle) => {
    request.headers.token = bundle.authData.token;
    request.headers.clientID = bundle.authData.clientID;
    return request;
};

module.exports = {
  config: {
    // "custom" is the catch-all auth type. The user supplies some info and Zapier can
    // make authenticated requests with it
    type: 'custom',

    // Define any input app's auth requires here. The user will be prompted to enter
    // this info when they connect their account.
    fields: [
        {
            key: 'clientID',
            type: 'string',
            required: true,
            helpText: 'clientID'

        },
        {
            key: 'token',
            type: 'password',
            required: true,
            helpText: 'token'

        }
    ],

    // The test method allows Zapier to verify that the credentials a user provides
    // are valid. We'll execute this method whenever a user connects their account for
    // the first time.
    test,

    // This template string can access all the data returned from the auth test. If
    // you return the test object, you'll access the returned data with a label like
    // `{{json.X}}`. If you return `response.data` from your test, then your label can
    // be `{{X}}`. This can also be a function that returns a label. That function has
    // the standard args `(z, bundle)` and data returned from the test can be accessed
    // in `bundle.inputData.X`.
  },
  befores: [addApiKeyToHeader],
  afters: [],
};
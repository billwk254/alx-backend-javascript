// 2-then.js

/**
 * Appends three handlers to the given promise:
 * - When the promise resolves, return an object { status: 200, body: 'success' }
 * - When the promise rejects, return an empty Error object
 * - For every resolution, log 'Got a response from the API' to the console
 *
 * @param {Promise} promise - Promise object to handle.
 */
function handleResponseFromAPI(promise) {
    promise
      .then((response) => {
        console.log('Got a response from the API');
        return { status: 200, body: 'success' };
      })
      .catch(() => new Error());
  }
  
  export default handleResponseFromAPI;
  
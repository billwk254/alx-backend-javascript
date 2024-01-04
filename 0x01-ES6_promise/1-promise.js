// 1-promise.js

/**
 * Returns a promise.
 * When the argument is true, resolve the promise with an object:
 * { status: 200, body: 'Success' }
 * When the argument is false, reject the promise with an error object:
 * Error('The fake API is not working currently')
 *
 * @param {boolean} success - Indicates whether to resolve or reject the promise.
 * @returns {Promise} - Promise object.
 */
function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
      if (success) {
        resolve({ status: 200, body: 'Success' });
      } else {
        reject(new Error('The fake API is not working currently'));
      }
    });
  }
  
  export default getFullResponseFromAPI;
  
// 4-user-promise.js

/**
 * Returns a resolved promise with an object:
 * { firstName: value, lastName: value }
 *
 * @param {string} firstName - First name value.
 * @param {string} lastName - Last name value.
 * @returns {Promise} - Resolved promise with an object.
 */
function signUpUser(firstName, lastName) {
    return Promise.resolve({ firstName, lastName });
  }
  
  export default signUpUser;
  
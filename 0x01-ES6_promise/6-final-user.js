// 6-final-user.js
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * Calls signUpUser and uploadPhoto functions with the provided arguments.
 * Returns an array with the results of both promises.
 *
 * @param {string} firstName - First name value.
 * @param {string} lastName - Last name value.
 * @param {string} fileName - Name of the file to be processed.
 * @returns {Array} - Array with the results of both promises.
 */
export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName).catch((error) => error), // Handle rejection, return error object
  ];

  return Promise.allSettled(promises);
}

// 5-photo-reject.js

/**
 * Returns a Promise rejecting with an Error and a specific message.
 *
 * @param {string} fileName - Name of the file to be processed.
 * @returns {Promise} - Rejected Promise with an Error.
 */
export default function uploadPhoto(fileName) {
    return Promise.reject(new Error(`${fileName} cannot be processed`));
  }
  
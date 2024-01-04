// 0-promise.js

import { uploadPhoto, createUser } from './utils';

/**
 * Returns a Promise that resolves with an object containing the responses
 * from uploadPhoto and createUser functions.
 * The object should have the following format:
 * {
 *   photo: { status: number, body: string },
 *   user: { firstName: string, lastName: string }
 * }
 */
function getResponseFromAPI() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  return Promise.all([photoPromise, userPromise]).then(([photoResponse, userResponse]) => {
    return {
      photo: photoResponse,
      user: userResponse,
    };
  });
}

export default getResponseFromAPI;

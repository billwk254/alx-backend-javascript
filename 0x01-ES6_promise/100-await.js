// 100-await.js
import { uploadPhoto, createUser } from './utils';

/**
 * Calls uploadPhoto and createUser functions asynchronously and returns an object
 * with the responses from both functions. If any function fails, returns an empty object.
 *
 * @returns {Promise} - Promise resolving to an object with photo and user responses.
 */
async function asyncUploadUser() {
  try {
    const photoResponse = await uploadPhoto();
    const userResponse = await createUser();

    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // Handle errors and return an empty object
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;

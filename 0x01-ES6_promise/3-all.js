// 3-all.js
import { uploadPhoto, createUser } from './utils';

/**
 * Uses the handleProfileSignup prototype to collectively resolve all promises
 * and log the body (firstName lastName) to the console.
 * In the event of an error, logs 'Signup system offline' to the console.
 */
function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;

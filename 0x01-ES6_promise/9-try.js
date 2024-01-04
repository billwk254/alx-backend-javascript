// 9-try.js
import divideFunction from './8-try';

/**
 * Accepts one argument: mathFunction (Function).
 * Executes the mathFunction and appends the result or error message to the queue array.
 * Appends 'Guardrail was processed' to the queue in every case.
 *
 * @param {Function} mathFunction - Function to be executed.
 * @returns {Array} - An array containing the result or error messages.
 */
export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(error.message);
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}

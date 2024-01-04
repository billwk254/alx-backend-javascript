// 8-try.js

/**
 * Accepts two arguments: numerator and denominator.
 * Throws an error if denominator is 0, otherwise returns the result of the division.
 *
 * @param {number} numerator - Numerator value.
 * @param {number} denominator - Denominator value.
 * @returns {number} - Result of the division.
 * @throws {Error} - If denominator is 0.
 */
export default function divideFunction(numerator, denominator) {
    if (denominator === 0) {
      throw new Error('cannot divide by 0');
    }
  
    return numerator / denominator;
  }
  
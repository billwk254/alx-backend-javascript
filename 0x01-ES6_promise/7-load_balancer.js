// 7-load_balancer.js

/**
 * Accepts two promises: chinaDownload and USDownload.
 * Returns the value of the promise that resolves first.
 *
 * @param {Promise} chinaDownload - Promise for downloading from China.
 * @param {Promise} USDownload - Promise for downloading from the US.
 * @returns {Promise} - The value of the promise that resolves first.
 */
export default function loadBalancer(chinaDownload, USDownload) {
    return Promise.race([chinaDownload, USDownload]);
  }
  
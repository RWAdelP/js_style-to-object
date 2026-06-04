'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const pairSplit = sourceString.split(';');

  const styleObject = pairSplit.reduce((accumulator, pair) => {
    const [key, value] = pair.split(':');

    if (value !== undefined) {
      accumulator[key.trim()] = value.trim();
    }

    return accumulator;
  }, {});

  return styleObject;
}

module.exports = convertToObject;

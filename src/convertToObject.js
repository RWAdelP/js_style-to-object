'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};
  const pairSplit = sourceString.split(';');

  for (const pair of pairSplit) {
    const [key, value] = pair.split(':');

    if (value === undefined) {
      continue;
    }

    styleObject[key.trim()] = value.trim();
  }

  return styleObject;
}

module.exports = convertToObject;

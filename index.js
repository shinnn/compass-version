'use strict';

var compassVersionCallback = require('compass-version-callback');
var PinkiePromise = require('pinkie-promise');

module.exports = function compassVersion(options) {
  if (options === undefined) {
    options = {};
  }

  return new PinkiePromise(function promisify(resolve, reject) {
    compassVersionCallback(options, function callback(err, version) {
      if (err) {
        reject(err);
        return;
      }

      resolve(version);
    });
  });
};

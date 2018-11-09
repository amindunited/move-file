/**
 * @license
 * Copyright Robin Buckley. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
'use strict';
const fs = require('fs');

const mvFile = function (originalPath, newPath) {

  const promise = new Promise((resolve, reject) => {

    fs.rename(originalPath, newPath, (err, contents) => {
      if (err) {
        reject(err);
      } else {
        resolve(contents);
      }
    });

  });

  return promise;

}

module.exports = mvFile;

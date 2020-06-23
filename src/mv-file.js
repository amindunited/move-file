/**
 * @license
 * Copyright Robin Buckley. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
'use strict';
const { rename } = require('fs').promises;

const mvFile = async (originalPath, newPath) => {

  const file = rename(originalPath, newPath);
  return file;

};

module.exports = mvFile;

/**
 * @license
 * Copyright Robin Buckley. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
'use strict';

const fs = require('fs');
const mvFile = require('./index');
const expect = require('chai').expect

const expectedContent = 'Hey';
const testFilePath = './mv-file-test-file.js';
const resultFilePath = './mv-file-result-file.js';

const getFile = function (filePath) {
  const promise = new Promise((resolve, reject) =>{
    fs.readFile(filePath, 'utf8', (err, contents) => {
      if (!err) {
        resolve(contents);
      } else {
        resolve({});
      }
    });
  });
  return promise;
};

const cleanup = () => {
  const promise = new Promise((resolve, reject) => {
    fs.stat(resultFilePath, (err, stats) => {
      if (!err) {
        if (stats.isFile() === true) {
          fs.unlink(resultFilePath, (err) => {
            resolve();
          });
        }
      } else {
        resolve();
      }
    });
  });
  return promise;
};

describe('Move File Promise', () => {

  beforeEach(() => {
    const promise = new Promise((resolve, reject) => {
      fs.writeFile(testFilePath, expectedContent, 'utf8', (err, contents) => {
        if (!err) {
          resolve(contents);
        } else {
          throw(err);
          reject(err);
        }
      });
    });
    return promise;
  });

  it('should export a function', () => {
    expect(mvFile).to.be.a('function');
  });

  it('should return a promise', () => {
    expect(mvFile(testFilePath, resultFilePath).then).to.be.a('function');
  });

  it('should handle an error', (done) => {
    mvFile('/this.file.doesnt.exist', resultFilePath)
      .then(() => getFile(resultFilePath),
        (err) => {
          expect(true).to.be.equal(true);
          done();
        }
      );
  });

  it('should move a file', (done) => {
    mvFile(testFilePath, resultFilePath)
      .then(() => getFile(resultFilePath), ()=> {  })
      .then((content) => {
        expect(content).to.equal(expectedContent);
        cleanup();
        done();
      });
  });

});

import path = require('path');
import * as fs from 'fs';

import { mocked } from 'ts-jest/utils';

import { moveFile } from './move-file';

jest.mock('fs', () => ({
  promises: {
    rename: jest.fn()
  }
}));

const mockedFs = mocked(fs, true);

describe('Move File', () => {

  it('should export a function', () => {
    expect(moveFile).toBeInstanceOf( Function );
  });

  it('should return a promise', () => {

    mockedFs.promises.rename.mockImplementation((fromPath, toPath): Promise<any> => {
      return new Promise((resolve) => {
        resolve();
      });
    });
    expect(moveFile('testFilePath', 'resultFilePath')).toBeInstanceOf(Promise);
  });

  it('should handle an error', async () => {

    mockedFs.promises.rename.mockImplementation((fromPath, toPath): Promise<any> => {
      return new Promise((resolve, reject) => {
        reject();
      });
    });

    moveFile('/this.file.doesnt.exist', 'resultFilePath')
      .then(() => false, (err) => {
        expect(true).toBeTruthy;
      });

  });

  it('should move a file', async () => {

    mockedFs.promises.rename.mockImplementation((fromPath, toPath): Promise<any> => {
      return new Promise((resolve) => {
        resolve();
      });
    });

    moveFile('testFilePath', 'resultFilePath')
      .then(() => 'success', ()=> {  })
      .then((content) => {
        expect(content).toEqual('success');
      });

  });
});

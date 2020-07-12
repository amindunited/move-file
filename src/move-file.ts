import { promises, PathLike } from 'fs';

const { rename } = promises;

const moveFile = (originalPath: PathLike, newPath: PathLike): Promise<void> => {

  return rename(originalPath, newPath);

};

export default moveFile;

export {
  moveFile
};

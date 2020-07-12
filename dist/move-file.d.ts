import { PathLike } from 'fs';
declare const moveFile: (originalPath: PathLike, newPath: PathLike) => Promise<void>;
export default moveFile;
export { moveFile };

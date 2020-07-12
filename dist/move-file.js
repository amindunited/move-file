"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveFile = void 0;
const fs_1 = require("fs");
const { rename } = fs_1.promises;
const moveFile = (originalPath, newPath) => {
  return rename(originalPath, newPath);
};
exports.moveFile = moveFile;
exports.default = moveFile;
//# sourceMappingURL=move-file.js.map

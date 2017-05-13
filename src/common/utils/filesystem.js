/**
 * 文件工具集
 */
const fs = require('fs');
const os = require('os');
const path = require('path');
const { toString } = require('lodash');

const isWindows = os.platform() === 'win32';
module.exports = {
  /**
   * 创建文件夹(多层)
   * @param dirpath 文件夹路径
   */
  mkdirsSync(dirpath) {
    if (fs.existsSync(dirpath)) {
      return true;
    }
    try {
      let pathtmp = '';
      const dirpathArray = dirpath.split(path.sep).filter(v => !think.isEmpty(v)).map(v => toString(v));

      // 处理windows盘符的问题
      if (isWindows) {
        const tmp = dirpathArray.shift();
        dirpathArray[0] = `${tmp}${path.sep}${dirpathArray[0]}`;
      }
      for (const dirname of dirpathArray) {
        if (!think.isEmpty(pathtmp)) {
          pathtmp = path.join(pathtmp, dirname);
        } else {
          pathtmp = isWindows ? dirname : `/${dirname}`;
        }
        if (fs.existsSync(pathtmp)) {
          continue;
        }
        fs.mkdirSync(pathtmp);
      }
      return true;
    } catch (e) {
      return false;
    }
  },
  /**
   * 删除文件夹
   * @param path 文件夹路径
   */
  rmdirSync(path) {
    let files = [];
    if (fs.existsSync(path)) {
      files = fs.readdirSync(path);
      for (const file of files) {
        const curPath = `${path}/${file}`;
        if (fs.statSync(curPath).isDirectory()) { // recurse
          this.rmdirSync(curPath);
        } else { // delete file
          fs.unlinkSync(curPath);
        }
      }
      fs.rmdirSync(path);
    }
  },
  /**
   * 获取文件大小
   * @param filepath 文件绝对路径
   */
  getFileSize(filepath) {
    const stats = fs.statSync(filepath);
    return stats.isFile() ? stats.size : 0;
  },
};

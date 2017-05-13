const path = require('path');
class base extends think.service.base {
  // 最先执行
  init(...args) {
    super.init(...args);

    // 根据业务模块自动切换日志频道
    const filename = (this.__filename || __filename).replace(think.APP_PATH, '');
    const arr = filename.split(path.sep);
    const channel = `${arr[1]}.${arr[2]}.${think.camelCase(arr[3].replace('.js', ''))}`;
    this.LOG = getLogger(channel);
  }
}

module.exports = base;

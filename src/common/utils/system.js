const os = require('os');

module.exports = {
  /**
   * 获取本机IP
   */
  getValidIPAddress() {
    const interfaces = os.networkInterfaces();
    for (const devName in interfaces) {
      if (devName.indexOf('VMware') > -1) {
        continue;
      }
      const iface = interfaces[devName];
      for (const alias of iface) {
        if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
          return alias.address;
        }
      }
    }

    return '0.0.0.0';
  },

  /**
   * 睡眠
   * @param milliSeconds 毫秒
   */
  sleep(milliSeconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, milliSeconds);
    });
  },

  /**
   * 获取本机ip地址
   */
  getLocalIp() {
    const interfaces = os.networkInterfaces();
    for (const devName in interfaces) {
      if (devName.indexOf('VMware') > -1) {
        continue;
      }
      const iface = interfaces[devName];
      for (const alias of iface) {
        if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
          return alias.address;
        }
      }
    }
    return '0.0.0.0';
  },
};

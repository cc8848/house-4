const Base = think.service('base', 'common');
// const axios = require('axios');
// const cheerio = require('cheerio');

module.exports = class extends Base {
  // 最先执行
  init(...args) {
    super.init(...args);
  }

  /**
   * 爬虫入口
   */
  crawler() {
    this.LOG.warn('房天下。。。房天下。。。房天下。。。房天下。。。');
  }

  show() {
    const fang1 = this.model('fang');
    fang1.save({ xxx: 1, tttt: 43 });
  }
};

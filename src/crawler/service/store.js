const Base = think.service('base', 'common');
class store extends Base {
  // 最先执行
  init(...args) {
    super.init(...args);
  }

  show() {
    const fang = this.model('fang');
    fang.save({ xxx: 1, tttt: 43 });
  }
}
module.exports = store;

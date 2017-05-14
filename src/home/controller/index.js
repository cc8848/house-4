const Base = requireBaseController();
class index extends Base {
  init(...args) {
    super.init(...args);
    this.whiteList = ['index'];
  }

  async indexAction() {
    return this.success('实业误国，炒楼兴邦');
  }
}
module.exports = index;

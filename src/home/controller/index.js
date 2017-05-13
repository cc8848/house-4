const Base = requireBaseController();
class index extends Base {
  init(...args) {
    super.init(...args);

    this.whiteList = ['index'];
  }

  async indexAction() {
    const storeService = requireService('store', 'crawler');
    storeService.show();
    return this.success('实业误国，炒楼兴邦');
  }
}
module.exports = index;

const Base = requireBaseController();
class index extends Base {
  init(...args) {
    super.init(...args);
  }

  async indexAction() {
    const model = this.model('fang', 'crawler');
    console.log(model);
    return this.success(think.env);
  }
}
module.exports = index;

/**
 * 房天下
 * http://www1.fang.com/
 */
const Base = requireBaseModel();
class fang extends Base {
  // 构造函数
  init(...args) {
    super.init(...args);
  }

  /**
   * 保存数据
   * @param data 一个json格式的对象
   */
  async save(data) {
    const rs = await this._model.create(data);
    this.LOG.warn(`rs: ${rs}`);
    const row = await this._model.findOne({ name: 'ruanzhijun' });
    this.LOG.warn(`row: ${row}`);
  }
}

module.exports = fang;

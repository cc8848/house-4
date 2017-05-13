const path = require('path');
const fs = require('fs');
const { toInteger } = require('lodash');
global.Promise = require('bluebird');
global.moment = require('moment');
/**
 *全局moment 暴露
 * http://momentjs.cn/
 */
const commonpath = think.getPath('common', '');
/**
 * 获取全局工具
 * @param plugins 工具类型 or mazing 的工具
 * @param path common的文件夹
 */
global.requireCommon = function (plugins, path = 'utils') {
  return require(`${commonpath}${path}/${plugins}`) || null;
};
/**
 * 集群队列执行模式
 * 获取当前实例id 默认为0
 * @type {number}
 */
process.env.NODE_APP_INSTANCE = toInteger(process.env.NODE_APP_INSTANCE) || 0;
global.ClusterQueue = function (cb) {
  if (think.isFunction(cb) || process.env.NODE_APP_INSTANCE !== 0) {
    return;
  }

  cb();
};

/**
 * 全局获取当前时间
 */
global.getCurrentTime = function (format) {
  format = format || 'YYYY-MM-DD HH:mm:ss';
  return moment().format(format);
};

/**
 * 全局秒转数据库Datetime时间格式
 */
global.secondsToDatetime = function (seconds) {
  return moment.unix(seconds).format('YYYY-MM-DD HH:mm:ss');
};

/**
 * 全局获取当前时间戳
 */
global.getCurrentTimestamp = function () {
  return moment.now();
};

/**
 * 获取base controller
 */
global.requireBaseController = function () {
  return require(`${commonpath}controller/base`) || null;
};

/**
 * 全局获取commonService
 */
global.requireCommonService = function () {
  return require(`${commonpath}/service/common_service`) || null;
};

/**
 * 全局获取srvice
 */
global.requireService = function (service, module) {
  const Service = think.service(service, module);
  return new Service();
};

/**
 * 获取base model
 */
global.requireBaseModel = function () {
  return require(`${commonpath}model/base`) || null;
};

/**
 * 获取模块model
 * @param plugins model名
 */
global.requireModel = function (plugins, path) {
  path = think.getPath(path, '');
  return require(`${path}model/${plugins}`) || null;
};

/**
 * 全局切换日志频道
 * @param category 日志频道(建议传当前文件名)
 */
const log4js = requireCommon('log4js', 'utils');
global.getLogger = function (category = 'console') {
  category = category.replace(think.APP_PATH, '').replace('.js', '').trim();
  const tmp = category.split(path.sep).filter(item => !think.isEmpty(item));
  const logger = log4js.getLogger(think.camelCase(tmp.join('.')));
  logger.setLevel(think.config('log_level'));
  return logger;
};

// 自动加载depend文件夹里面的文件
const dependDir = path.resolve(`${__dirname}/../depend`);
fs.readdirSync(dependDir).filter(v => v.indexOf('.js') > -1 && v.indexOf('.js.map') === -1).filter(v => require(`${dependDir}/${v}`));

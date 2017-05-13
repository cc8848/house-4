/**
 * log4js初始化 ALL TRACE DEBUG INFO WARN ERROR FATAL OFF
 */
const fs = require('fs');
const log4js = require('log4js');

const logconfig = think.config('log4js');
if (!fs.existsSync(logconfig.customBaseDir)) {
  think.mkdir(logconfig.customBaseDir);
}
for (const v of logconfig.appenders) {
  if (v.filename && !fs.existsSync(v.filename)) {
    think.mkdir(v.filename);
  }
}
log4js.configure(logconfig);
log4js.loadAppender('categoryFilter');
// log4js.getLogger('console');
/** 切换日志频道 不影响写日志操作
 level:
 ALL
 TRACE
 DEBUG
 INFO
 WARN
 ERROR
 FATAL
 OFF
 LOG.setLevel(level)
 */
module.exports = log4js;

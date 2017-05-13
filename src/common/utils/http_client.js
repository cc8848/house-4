/**
 * http客户端
 */
const LOG = getLogger(__filename);
const request = require('request');
const fs = require('fs');

module.exports = {
  /**
   * post获取数据(异步版)
   * @param url 请求地址
   * @param data 请求数据
   * @param callback 回调函数(以http返回的数据为参数)
   */
  post(url, data, callback) {
    try {
      LOG.debug(`send http post request to: ${url}, param: ${JSON.stringify(data)}`);
      request.post({ url, form: data }, (err, httpResponse, body) => {
        LOG.debug(`receive http post response url: ${url}, response: ${body}`);
        if (typeof callback === 'function') {
          callback(body);
        }
      });
    } catch (e) {
      LOG.error(e);
    }
  },
  /**
   * post获取数据(同步版)
   * @param url 请求地址
   * @param data 请求数据
   */
  postAsync(url, data = {}) {
    return new Promise((resolve, reject) => {
      LOG.debug(`send http post request to: ${url}, param: ${JSON.stringify(data)}`);
      request.post({ url, form: data }, (err, httpResponse, body) => {
        LOG.debug(`receive http post response url: ${url}, response: ${body}`);
        if (err) {
          reject(err);
          return;
        }
        resolve(body);
      });
    }).catch((e) => {
      LOG.error(e);
    });
  },
  /**
   * get获取数据(异步版)
   * @param url 请求地址
   * @param data 请求数据
   * @param callback 回调函数(以http返回的数据为参数)
   */
  get(url, data, callback) {
    try {
      url += '?';
      const keys = Object.keys(data);
      for (const k of keys) {
        url += `${k}=${data[k]}&`;
      }
      url = url.substring(0, url.length - 1);
      LOG.debug(`send http get request to: ${url}`);
      request.get({ url, form: data }, (err, httpResponse, body) => {
        LOG.debug(`receive http get response url: ${url}, response: ${body}`);
        if (typeof callback === 'function') {
          callback(body);
        }
      });
    } catch (e) {
      LOG.error(e);
    }
  },
  /**
   * get获取数据(同步版)
   * @param url 请求地址
   * @param data 请求数据
   */
  getAsync(url, data = {}) {
    url += '?';
    const keys = Object.keys(data);
    for (const k of keys) {
      url += `${k}=${data[k]}&`;
    }
    url = url.substring(0, url.length - 1);
    LOG.debug(`send http get request to: ${url}`);
    return new Promise((resolve, reject) => {
      request.get({ url, form: data }, (err, httpResponse, body) => {
        LOG.debug(`receive http get response url: ${url}, response: ${body}`);
        if (err) {
          reject(err);
          return;
        }
        resolve(body);
      });
    }).catch((e) => {
      LOG.error(e);
    });
  },
  /**
   * put获取数据(异步版)
   * @param url 请求地址
   * @param data 请求数据
   * @param callback 回调函数(以http返回的数据为参数)
   */
  put(url, data, callback) {
    try {
      LOG.debug(`send http put request to: ${url}, param: ${JSON.stringify(data)}`);
      request.put({ url, form: data }, (err, httpResponse, body) => {
        LOG.debug(`receive http put response url: ${url}, response: ${body}`);
        if (typeof callback === 'function') {
          callback(body);
        }
      });
    } catch (e) {
      LOG.error(e);
    }
  },
  /**
   * put获取数据(同步版)
   * @param url 请求地址
   * @param data 请求数据
   */
  putAsync(url, data = {}) {
    return new Promise((resolve, reject) => {
      LOG.debug(`send http put request to: ${url}, param: ${JSON.stringify(data)}`);
      request.put({ url, form: data }, (err, httpResponse, body) => {
        LOG.debug(`receive http put response url: ${url}, response: ${body}`);
        if (err) {
          reject(err);
          return;
        }
        resolve(body);
      });
    }).catch((e) => {
      LOG.error(e);
    });
  },
  /**
   * delete数据(异步版)
   * @param url 请求地址
   * @param data 请求数据
   * @param callback 回调函数(以http返回的数据为参数)
   */
  delete(url, data, callback) {
    try {
      LOG.debug(`send http delete request to: ${url}, param: ${JSON.stringify(data)}`);
      request.delete({ url, form: data }, (err, httpResponse, body) => {
        LOG.debug(`receive http delete response url: ${url}, response: ${body}`);
        if (typeof callback === 'function') {
          callback(body);
        }
      });
    } catch (e) {
      LOG.error(e);
    }
  },
  /**
   * delete数据(同步版)
   * @param url 请求地址
   * @param data 请求数据
   */
  deleteAsync(url, data = {}) {
    return new Promise((resolve, reject) => {
      LOG.debug(`send http delete request to: ${url}, param: ${JSON.stringify(data)}`);
      request.delete({ url, form: data }, (err, httpResponse, body) => {
        LOG.debug(`receive http delete response url: ${url}, response: ${body}`);
        if (err) {
          reject(err);
          return;
        }
        resolve(body);
      });
    }).catch((e) => {
      LOG.error(e);
    });
  },
  /**
   * 下载文件
   * @param uri 文件网络地址
   * @param filename 文件本地地址
   */
  downloadFile(uri, filename) {
    return new Promise((resolve) => {
      const stream = fs.createWriteStream(filename);
      request(uri).pipe(stream).on('close', () => {
        resolve(filename);
      });
    }).catch((e) => {
      LOG.error(e);
    });
  },
};

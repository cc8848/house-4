/**
 * 简体中文错误提示
 * key规则：
 * 模块名_具体错误_ERROR(全部大写)，所有标点符号用中文
 */

module.exports = {
  /**
   * 无效链接！
   */
  SYSTEM_NOT_FIND_URL_ERROR: '系统无效链接!',
  /**
   * 找不到相应权限，请重试！
   */
  SYSTEM_NOT_FIND_RESPONSE_ERROR: '找不到相应权限，请重试！',
  /**
   * 请求失败，请稍后再试！
   */
  SYSTEM_REQUEST_FAILE_ERROR: '请求失败，请稍后再试！',
  /**
   * 请求的参数不能为空！
   */
  SYSTEM_REQUEST_PARAMS_CAN_NOT_EMPTY_ERROR: '请求的参数不能为空！',
  /**
   * 请求参数错误！
   */
  SYSTEM_REQUEST_PARAMS_ERROR: '请求参数错误！',
  /**
   * salt不能为空！
   */
  USER_SALT_IS_EMPTY_ERROR: 'salt不能为空！',
  /**
   * 用户不存在！
   */
  USER_INFO_NOT_EXIST_ERROR: '用户不存在！',
  /**
   * 登录密码输入错误
   */
  USER_PASSWORD_ERROR: '登录密码输入错误！',
  /**
   * 用户被封号
   */
  USER_WAS_BANNED_ERROR: '您已被封号！',
  /**
   * 您的操作太快啦，请稍后重试！
   */
  USER_OPERATING_TOO_FAST: '您的操作太快啦，请稍后重试！',
  /**
   * 验证码已过期
   */
  USER_CAPTCHA_OVER_TIME: '验证码已过期',
  /**
   * 验证码错误
   */
  USER_CAPTCHA_ERROR: '验证码错误',
  /**
   * 已绑定微信
   */
  USER_WX_IS_BIND: '用户已绑定微信',
  /**
   * 未绑定微信
   */
  USER_WX_NOT_BIND: '用户未绑定微信',
  /**
   * 已绑定微信小程序
   */
  USER_WXAPP_IS_BIND: '用户已绑定微信小程序',
  /**
   * 未绑定微信小程序
   */
  USER_WXAPP_NOT_BIND: '用户未绑定微信小程序',
  /**
   * 您未绑定米星帐号
   */
  USER_NOT_BIND_MAZING_ERROR: '您未绑定米星帐号',
  /**
   * 活动不存在
   */
  EVENT_NOT_EXISTS_ERROR: '活动不存在',
  /**
   * 此活动已被收藏过
   */
  EVENT_HAS_FAV_ERROR: '此活动已被收藏过',
  /**
   * 此活动还没被收藏
   */
  EVENT_IS_UNFAV_ERROR: '此活动还没被收藏',
};

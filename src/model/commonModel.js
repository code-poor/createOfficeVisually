class commonModel {
  /**
   * 判断参数是否是一个纯粹的对象
   * @param {*} value 要判断的值
   * @returns {bool}
   * @level 5
   */
  isPlainObject(value) {
    return typeof value === 'object' && value !== null;
  }
  /**
   * 深拷贝一个对象，如果参数不是对象 返回原值
   * @param {Object} obj 需要拷贝的对象
   * @returns {Object}
   * @level 5
   */
  cloneDeep(obj) {
    if (this.isPlainObject(obj) || Array.isArray(obj)) {
      return JSON.parse(JSON.stringify(obj));
    }
    return obj;
  }
  /**
   * 获取uuid
   * @returns uuid
   */
  getUUID(num = 32) {
    function S4() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    // 如果数字不是4倍数，按32位处理
    if (num > 0 && num % 4 !== 0) num = 32;
    let res = '';
    for (let i = 0; i < num / 4; i++) {
      res += S4();
    }
    return res;
  }
}
export default commonModel;

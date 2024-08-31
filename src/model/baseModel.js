class BaseModel {
  constructor() {
    this.name = 'baseModel';
    this._data = {
      // 场景数据
      sceneData: null,
      // 模版列表
      templateList: [],
      // 当前模版
      currentTemplate: {}
    };
  }

  /**
   * @description 初始化数据
   */
  initValue() {
    this._data = {
      // 场景数据
      sceneData: null,
      // 模版列表
      templateList: [],
      // 当前模版
      currentTemplate: {}
    };
  }

  /**
   * @description 获取数据
   * @param {*} key
   * @returns
   */
  getValue(key) {
    // 如果key不存在，返回所有数据
    if (!this._data[key]) return this._data;
    // 如果key存在，返回key对应的值
    return this._data[key];
  }

  /**
   * @description 设置数据
   * @param {*} key
   * @param {*} value
   */
  setValue(key, value) {
    this._data[key] = value;
  }
}

// Create a single instance of the model
const singleBaseModel = new BaseModel();
export default singleBaseModel;

import baseModel from './baseModel.js';

class Model {
  constructor() {
    this.initModel();
  }

  initModel() {
    // 挂载模型
    this.initCatalogueModel();
    // 初始化数据模型
    window.yyds = this;
    // 数据模型初始化
    baseModel.initValue();
    // 模版数据初始化
    this.tmplAnalModel.initValue();
  }

  initCatalogueModel() {
    // 获取当前目录下所有的model
    const modelContext = require.context('./', false, /\.js$/);
    const modelList = modelContext.keys().filter((item) => item !== './index.js');
    modelList.forEach((item) => {
      const modelItem = modelContext(item).default;
      if (modelItem.name !== 'baseModel') {
        this[modelItem.name] = new modelItem();
      } else {
        this[modelItem.name] = modelItem;
      }
    });
  }
}
export default Model;

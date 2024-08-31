import baseModel from './baseModel.js';

class Model {
  constructor() {
    this.initModel();
  }
  initModel() {
    this.initCatalogueModel();
    // 数据模型初始化
    baseModel.initValue();
  }

  initCatalogueModel() {
    // 获取当前目录下所有的model
    const modelContext = require.context('./', false, /\.js$/);
    const modelList = modelContext.keys().filter((item) => item !== './index.js');
    modelList.forEach((item) => {
      const modelItem = modelContext(item).default;
      debugger
      if (modelItem.name !== 'baseModel') {
        this[modelItem.name] = new modelItem();
      }else{
        this[modelItem.name] = modelItem;
      }
    });
  }
}
export default Model;

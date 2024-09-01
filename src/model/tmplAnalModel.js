import baseModel from './baseModel';
import { template, bugTemplate, featTemplate } from '../template';
class tmplAnalModel {
  // 初始化模版数据
  initValue() {
    // 定义初始化模版数据
    let newTemplate = window.yyds.commonModel.cloneDeep(template);
    // 获取当前模版类型
    const templateType = this.getTemplateType();
    // 创建紧急上线模版
    if (templateType === 'emergencyOnLine') newTemplate.push(bugTemplate);
    // 创建迭代上线模版
    if (templateType === 'iterativeOnLine') newTemplate.push(featTemplate);
    // 深拷贝模版数据
    newTemplate = window.yyds.commonModel.cloneDeep(newTemplate);
    // 模版进行初始化
    this.templateInit(newTemplate);
    // 对模版tree数据增加id
    this.setTemplateData(newTemplate);
  }
  /**
   * @description 对模版tree数据增加id
   * @param {*} data
   */
  templateInit(data) {
    if (!Array.isArray(data)) data = [data];
    // 遍历数据
    data.forEach((item) => {
      // 设置id
      item.id = window.yyds.commonModel.getUUID();
      // 如果有子节点则递归
      if (item.content) {
        this.templateInit(item.content);
      }
    });
  }
  /**
   * @description 获取当前模版分析数据
   * @returns
   */
  getTmplAnalData() {
    return baseModel.getValue('tmplAnalData');
  }

  /**
   * @description 设置模版数据
   * @param {*} data
   */
  setTemplateData(data) {
    baseModel.setValue('tmplAnalData', data);
  }

  /**
   * @description 设置当前模版类型
   * @param {*} type
   */
  setTemplateType(type) {
    baseModel.setValue('templateType', type);
  }
  /**
   * @description 获取当前模版类型
   * @returns
   */
  getTemplateType() {
    return baseModel.getValue('templateType');
  }

  /**
   * @description 更改当前模版类型
   * @returns
   */
  changeTemplateType(templateType) {}

  /**
   * @description 新增模版
   */
  addTemplate(templateType) {
    // 获取当前模版数据
    let currTmplAnalData = this.getTmplAnalData();
    // 创建模版
    if (templateType === 'bug') {
      const newBugTemplate = window.yyds.commonModel.cloneDeep(bugTemplate);
      this.templateInit(newBugTemplate);
      currTmplAnalData.push(newBugTemplate);
    }
    if (templateType === 'feat') {
      const newFeatTemplate = window.yyds.commonModel.cloneDeep(featTemplate);
      this.templateInit(newFeatTemplate);
      currTmplAnalData.push(newFeatTemplate);
    }
    // 设置模版数据
    this.setTemplateData(currTmplAnalData);
  }
}
export default tmplAnalModel;

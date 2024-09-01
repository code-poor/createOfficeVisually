import template from '../template/emergencyOnline';
class emergencyOnlineTmplModel {
  // 对模版tree数据增加id
  addIdToTmplTreeData(data) {
    if (!Array.isArray(data)) data = [data];
    // 遍历数据
    data.forEach((item) => {
      // 设置id
      item.id = window.yyds.commonModel.getUUID();
      // 如果有子节点则递归
      if (item.content) {
        this.addIdToTmplTreeData(item.content);
      }
    });
  }
  getTemplateData() {
    // 返回模板数据
    let emergencyOnlineTmplData = window.yyds.baseModel.getValue('emergencyOnlineTmplData');
    // 如果有数据则返回数据
    if (emergencyOnlineTmplData) return emergencyOnlineTmplData;
    // 如果不存在则返回模板
    emergencyOnlineTmplData = window.yyds.commonModel.cloneDeep(template);
    // 对模版tree数据增加id
    this.addIdToTmplTreeData(emergencyOnlineTmplData.content);
    // 设置模板数据
    this.setTemplateData(emergencyOnlineTmplData);
    // 返回模板数据
    return emergencyOnlineTmplData;
  }
  setTemplateData(data) {
    // 设置模板数据
    window.yyds.baseModel.setValue('emergencyOnlineTmplData', data);
  }
}
export default emergencyOnlineTmplModel;

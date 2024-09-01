import pptxgen from 'pptxgenjs';
class pptModel {
  /**
   * @description 获取ppt文件名
   * @returns
   */
  getPptFileName() {
    let currTmplAnalData = window.yyds.tmplAnalModel.getTemplateData();
    const homePage = currTmplAnalData[0].content[0];
    return homePage.content.map((currCom) => currCom.value.replace('说明', '').replaceAll('-', '')).join('-');
  }
  /**
   * @description 获取模版数据
   */
  getTemplateData() {
    let templateData = [];
    let currTmplAnalData = window.yyds.tmplAnalModel.getTemplateData();
    currTmplAnalData = window.yyds.commonModel.cloneDeep(currTmplAnalData);
    currTmplAnalData.forEach((currTmpl) => {
      templateData = [...templateData, ...currTmpl.content];
    });
    return templateData;
  }
  createPptPage(currPage, currPageModel) {
    currPage.content.forEach((currCom) => {
      if (currCom.isShowTitleToPpt) {
        currPageModel.addText(currCom.title, currCom.titlePptConfig);
      }
      if (currCom.isShowValueToPpt) {
        if (currCom.comType === 'inputDatePicker') {
          //对值进行替换
          currCom.value = currCom.value.replace(/-/g, '');
        }
        currPageModel.addText(currCom.value, currCom.valuePptConfig);
      }
    });
  }

  createPpt() {
    // 获取当前模版分析数据
    const templateData = this.getTemplateData();
    // 创建pptx模型
    const pptxModel = new pptxgen();
    // 定义页面大小
    pptxModel.defineLayout({ name: 'custombk', width: 13.33, height: 7.49 });
    // 设置页面大小
    pptxModel.layout = 'custombk';
    // 遍历模版数据
    templateData.forEach((currPage) => {
      // 创建当前页面模型
      const currPageModel = pptxModel.addSlide();
      // 创建当前页细节
      this.createPptPage(currPage, currPageModel);
    });
    // 创建pptx
    pptxModel.writeFile({ fileName: `${this.getPptFileName()}.pptx` });
  }
}
export default pptModel;
// 13.33--》25.4

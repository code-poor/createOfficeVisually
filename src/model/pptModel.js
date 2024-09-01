import pptxgen from 'pptxgenjs';
class pptModel {
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
    const currTmplAnalData = window.yyds.tmplAnalModel.getCurrTmplAnalData();
    // 创建pptx模型
    const pptxModel = new pptxgen();
    // 遍历模版数据
    currTmplAnalData.content.forEach((currPage) => {
      // 创建当前页面模型
      const currPageModel = pptxModel.addSlide();
      // 创建当前页细节
      this.createPptPage(currPage, currPageModel);
    });
    // 创建pptx
    pptxModel.writeFile({ fileName: `${currTmplAnalData.title}.pptx` });
  }
}
export default pptModel;

import React, { useState } from 'react';
import { Steps, Button } from 'antd';
import { useUpdate } from 'ahooks';
import './index.less';
const Home = () => {
  // 定义强制更新
  const forceUpdate = useUpdate();
  // 当前步骤
  const [currStep, setCurrStep] = useState(0);
  // 获取模板数据
  const templateData = window.yyds.tmplAnalModel.getTmplAnalData();
  /**
   * @description: 添加模板数据
   */
  const addTemplateData = (templateType) => {
    // 添加模板
    window.yyds.tmplAnalModel.addTemplate(templateType);
    // 强制更新
    forceUpdate();
  }
  /**
   * @description: 步骤条数据
   */
  const renderStepItems = () => {
    return templateData.map((item) => {
      return {
        title: item.title
      }
    })
  }
  const renderEachStepsContent = () => {
    return (
      <div>
        <div></div>
      </div>
    );
  }
  const renderFootButton = () => {
    const buttonList = [
      <Button type="primary" onClick={() => { addTemplateData('bug') }}>新增bug模版</Button>,
      <Button type="primary" onClick={() => { addTemplateData('feat') }}>新增故事模版</Button>,
    ];
    if (currStep !== templateData.length - 1) {
      buttonList.push(
        <Button key="next" type="primary" onClick={() => setCurrStep(currStep + 1)}>下一步</Button>
      )
    }
    if (currStep !== 0) {
      buttonList.push(
        <Button key="next" type="primary" onClick={() => setCurrStep(currStep - 1)}>上一步</Button>
      )
    }
    if (currStep === templateData.length - 1) {
      buttonList.push(
        <Button key="next" type="primary" onClick={window.yyds.pptModel.createPpt}>制作PPT</Button>
      )
    }
    return buttonList
  }
  return (
    <div className='home_page'>
      <div className='header'> <Steps current={currStep} items={renderStepItems()} /></div>
      <div className='middle'>{renderEachStepsContent()}</div>
      <div className='foot'>{renderFootButton()}</div>
    </div>
  );
}
export default Home;
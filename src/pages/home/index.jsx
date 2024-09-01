import React, { useState } from 'react';
import { Steps, Button } from 'antd';
import { useUpdate } from 'ahooks';
import EachPage from '../eachPage';
import './index.less';
const Home = () => {
  // 定义强制更新
  const forceUpdate = useUpdate();
  // 当前步骤
  const [currStep, setCurrStep] = useState(0);
  // 获取模板数据
  const templateData = window.yyds.tmplAnalModel.getTemplateData();
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
   * @description: 修改每一页
   * @param {*} pageValue 
   */
  const changeEachPage = (pageValue) => {
    // 遍历每一页
    templateData[currStep].content.forEach((currPage) => {
      if (currPage.id === pageValue.id) currPage.value = pageValue.value;
    })
    // 设置模版数据
    window.yyds.tmplAnalModel.setTemplateData(templateData);
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

  /**
   * @description: 渲染每一步的内容
   * @returns 
   */
  const renderEachStepsContent = () => {
    // 当前步骤数据
    const currTmplData = templateData[currStep]
    // 
    return currTmplData?.content?.map((currPage) => {
      return (<EachPage key={currPage.id} currPage={currPage} onChange={changeEachPage} />)
    })
  }

  /**
   * @description: 渲染底部按钮
   * @returns 
   */
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
        <Button key="next" type="primary" danger onClick={() => { window.yyds.pptModel.createPpt() }}>制作PPT</Button>
      )
    }
    return buttonList
  }
  return (
    <div className='home_page'>
      <div className='header'> <Steps current={currStep} items={renderStepItems()} onChange={(value) => { setCurrStep(value) }} /></div>
      <div className='middle'>{renderEachStepsContent()}</div>
      <div className='foot'>{renderFootButton()}</div>
    </div>
  );
}
export default Home;
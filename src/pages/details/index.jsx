
import React from 'react';
import { Button } from 'antd';
import { useMount, useUpdate } from 'ahooks';
import EachPage from './eachPage';
const Details = () => {
  // 定义强制更新
  const forceUpdate = useUpdate();

  /**
   * @description: 页面加载时执行
   */
  useMount(() => {
    const currTmplAnalData = window.yyds.tmplAnalModel.getCurrTmplAnalData();
    // 设置页面标题
    document.title = currTmplAnalData.title;
  })
  /**
   * @description: 制作PPT
   */
  const createPPT = () => {
    window.yyds.pptModel.createPpt()
  }
  /**
   * @description: 修改每一页
   * @param {*} pageValue 
   */
  const changeEachPage = (pageValue) => {
    // 获取当前模版分析数据的内容
    const currTmplAnalData = window.yyds.tmplAnalModel.getCurrTmplAnalData();
    // 遍历每一页
    currTmplAnalData.content.forEach((currPage) => {
      if (currPage.id === pageValue.id) currPage.value = pageValue.value;
    })
    // 设置模版数据
    window.yyds.tmplAnalModel.setCurrTemplateData(currTmplAnalData);
    forceUpdate();
  }
  /**
   * 渲染每一页ppt
   */
  const renderEachPpt = () => {
    // 获取当前模版分析数据
    const currTmplAnalData = window.yyds.tmplAnalModel.getCurrTmplAnalData();
    // 获取当前模版分析数据的内容
    return currTmplAnalData.content.map((item) => {
      if (item.pageType === 'main') {
        return (<div>
          <EachPage key={item.id} currPage={item} changeEachPage={changeEachPage} />
        </div>)
      } else {
        return item.content.map((currPage) => {
          return (<div>
            <EachPage key={currPage.id} currPage={currPage} changeEachPage={changeEachPage} />
          </div>)
        })
      }
    })
  }
  return (
    <div>
      <div>
        <Button>新增bug/feat模版</Button>
        <Button onClick={createPPT}>制作PPT</Button>
      </div>
      <div>
        {renderEachPpt()}
      </div>
    </div>
  );
}
export default Details;
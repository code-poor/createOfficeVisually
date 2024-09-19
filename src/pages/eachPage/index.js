import React from 'react';
import { Button } from 'antd';
import EachCom from '../eachCom';
const EachPage = ({ currPage, onChange, forceUpdate }) => {
  const changeEachCom = (comValue) => {
    currPage.content.forEach((element) => {
      if (element.id === comValue.id) {
        element.value = comValue.value;
      }
    });
    onChange(currPage);
  };
  /**
   * @description: 点击扩展组件
   */
  const titleExtComClick = (onClickStr) => {
    const onClick = new Function('return  window.yyds.' + onClickStr)();
    onClick();
    forceUpdate();
  };
  const renderTitleExtCom = (titleExtComponent = []) => {
    return titleExtComponent.map((item) => {
      return (
        <Button
          type='text'
          danger
          onClick={() => {
            titleExtComClick(item.onClick);
          }}
        >
          {item.comTitle}
        </Button>
      );
    });
  };
  const renderEachCom = () => {
    return currPage.content.map((item) => {
      if (item.isShowToPage === false) return null;
      return (
        <div className='each_com'>
          <div className='each_com_title'>{item.title}</div>
          <div className='each_com_value'>{<EachCom item={item} onChange={changeEachCom} />}</div>
        </div>
      );
    });
  };
  return (
    <div className='each_page'>
      <div className='each_page_title_content'>
        <div className='each_page_title'>{currPage.title}</div>
        <div className='each_page_title_ext'>
          <div>{renderTitleExtCom(currPage.titleExtComponent)}</div>
        </div>
      </div>
      <div className='each_page_content'>{renderEachCom()}</div>
    </div>
  );
};
export default EachPage;

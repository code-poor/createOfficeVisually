import React from 'react';
import EachCom from '../eachCom';
const EachPage = ({ currPage, onChange }) => {
  const changeEachCom = (comValue) => {
    currPage.content.forEach((element) => {
      if (element.id === comValue.id) {
        element.value = comValue.value;
      }
    });
    onChange(currPage);
  };
  const renderEachCom = () => {
    return currPage.content.map((item) => {
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
      <div>{currPage.title}</div>
      <div>{renderEachCom()}</div>
    </div>
  );
};
export default EachPage;

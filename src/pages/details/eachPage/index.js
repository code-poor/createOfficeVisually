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
        <>
          <div>{item.title}</div>
          <div>{<EachCom item={item} onChange={changeEachCom} />}</div>
        </>
      );
    });
  };
  return (
    <div>
      <div>{currPage.title}</div>
      <div>{renderEachCom()}</div>
    </div>
  );
};
export default EachPage;

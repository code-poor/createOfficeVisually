import React from 'react';
import inputs from '../inputs';
const EachCom = (props) => {
  const { item } = props;
  // 获取每个组件
  const InputCom = inputs[item.comType];
  const onChange = (value) => {
    item.value = value;
    props.onChange(item);
  };
  return <InputCom key={item.id} options={item.comOptions} value={item.value} onChange={(value) => onChange(value)} />;
};
export default EachCom;

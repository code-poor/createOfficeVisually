import { Input } from 'antd';
const { TextArea } = Input;
const InputText = (props) => {
  const onChange = (e) => {
    const value = e.target.value;
    props.onChange(value);
  }
  return <TextArea {...props.options} value={props.value} onChange={onChange} />;
};
export default InputText;

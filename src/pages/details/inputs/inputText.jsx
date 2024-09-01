import { Input } from 'antd';
const InputText = (props) => {
  const onChange = (e) => {
    const value = e.target.value;
    props.onChange(value);
  }
  return <Input {...props.options} value={props.value} onChange={onChange} />;
};
export default InputText;

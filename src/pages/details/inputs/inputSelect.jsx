import React from 'react';
import { Select } from "antd";
const InputSelect = (props) => {
    const onChange = (value) => {
        debugger
        props.onChange(value);
    }
    return (
        <Select {...props.options} value={props.value} onChange={onChange} />
    )
}
export default InputSelect;
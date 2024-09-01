import React from 'react';
import { Select } from "antd";
const InputSelect = (props) => {
    const onChange = (value) => {
        if (props.options.mode === 'multiple') value = value && value.join(',')
        props.onChange(value);
    }
    const handleValue = () => {
        if (props.options.mode === 'multiple') return props.value && props.value.split(',')
        return props.value
    }

    return (
        <Select {...props.options} value={handleValue(props.value)} onChange={onChange} style={{ minWidth: 200 }} />
    )
}
export default InputSelect;
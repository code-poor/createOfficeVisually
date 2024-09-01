import React from 'react';
import { DatePicker } from "antd";
import dayjs from 'dayjs';
const InputDatePicker = (props) => {
    const onChange = (_, dateString) => {
        props.onChange(dateString);
    }
    const handleValue = (value) => {
        return dayjs(value,).isValid() ? dayjs(value, 'YYYY-MM-DD') : value; //
    }
    return (
        <DatePicker  {...props.options} value={handleValue(props.value)} onChange={onChange} />
    )
}
export default InputDatePicker;
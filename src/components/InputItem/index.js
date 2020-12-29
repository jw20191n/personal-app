import { Input } from 'antd';
import React from 'react';

const InputItem = (props) => {
    const { placeholder, size } = props;
    return(
        <Input placeholder={placeholder} size={size}/>
    )
}

export default InputItem;
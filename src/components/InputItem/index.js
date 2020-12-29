import { Input, Form } from 'antd';
import React from 'react';

const InputItem = (props) => {
    const { name, ...rest } = props; 
    return(
        <Form.Item name={name}>
            <Input {...rest}/>
        </Form.Item>
       
    )
}

export default InputItem;
import { Input, Form } from 'antd';
import React from 'react';

const InputItem = (props) => {
    const { name, rules, ...rest } = props; 
    return(
        <Form.Item name={name} rules={rules}>
            <Input {...rest}/>
        </Form.Item>
       
    )
}

export default InputItem;
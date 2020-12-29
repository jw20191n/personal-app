import { Input, Form, Button, Row, Col, message } from 'antd';
import React, { useState } from 'react';
import styles from './index.module.less';

const InputItem = (props) => {
    const { name, rules, ...rest } = props; 
    const [isCountingDown, setTiming] = useState(false); //if the timer is running

    const handleClickCaptcha = () => {
        message.success('Verification successfully sent');
        setTiming(true);
    }

    if(name === 'captcha'){
        return(
            <Form.Item name={name} rules={rules}>
                <Row gutter={8}>
                    <Col span={16}>
                        <Input {...rest}/>
                    </Col>
                    <Col span={8}>
                        <Button 
                            className={styles.getCaptcha} 
                            disabled={isCountingDown}
                            size="large"
                            onClick={handleClickCaptcha}
                            >
                                { isCountingDown ? 'XX seconds' : 'Send Code'}
                            </Button>
                    </Col>
                </Row>
            </Form.Item> 
        )
    }

    return(
        <Form.Item name={name} rules={rules}>
            <Input {...rest}/>
        </Form.Item>
       
    )
}

export default InputItem;
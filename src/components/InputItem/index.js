import { Input, Form, Button, Row, Col, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'redux-react-hook';
import { getCaptcha } from '../../actions/accounts';
import styles from './index.module.less';

const InputItem = (props) => {
    const dispatch = useDispatch();
    const { name, rules, ...rest } = props; 
    const [isCountingDown, setCountDown] = useState(false); //if the timer is running
    const [count, setCount] = useState(props.countDown || 60);//time left in count down timer

    const handleClickCaptcha = () => {
        message.success('Verification successfully sent');
        dispatch(getCaptcha());
        setCountDown(true);
    }

    //monitor the change of state of the 'isCountingDown'
    useEffect(() => {
        let interval = 0;
        if(isCountingDown){
            interval = window.setInterval( () => {
                setCount((preSec) => {
                    if( preSec <= 1){
                        setCountDown(false);//count down is over
                        clearInterval(interval);
                        return props.countDown || 60;
                    }
                    return preSec - 1;
                })
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isCountingDown])

    //在useEffect里return一个函数
    //就相当与ComponentWillUnmount -> 当组件需要被卸载的时候，会执行一些东西
    //等效于： 
    //useEffect(() => { 
    //     return () => console.log('unmount');
    // }, [])

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
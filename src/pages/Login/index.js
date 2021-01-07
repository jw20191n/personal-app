import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Form, Row, Checkbox } from 'antd';
import { UserOutlined, LockTwoTone, MobileTwoTone, MailTwoTone,AlipayCircleOutlined, TaobaoCircleOutlined, WeiboCircleOutlined } from '@ant-design/icons';
import InputItem from '../../components/InputItem';
import SubmitButton from '../../components/SubmitButton';
import styles from './index.module.less';

const { TabPane } = Tabs;

const Login = () => {
    const [autoLogin, setAutoLogin] = useState(true);
    const [form] = Form.useForm();
    const handleFinish = (values) => {
        console.log(values);
    }

    return(
        <div className={styles.loginContainer}>
            <div className={styles.login}>
                <Form 
                    form={form}
                    onFinish={handleFinish}>
                    {/* set the defaultActiveKey as 1, so the tab will be highlighted by default */}
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Sign in with username" key="1">
                            <InputItem 
                                name="username"
                                prefix={<UserOutlined style={{ color: '#1890ff' }}/>}
                                placeholder="username" size="large"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter username'
                                    }
                                ]}/>
                            <InputItem 
                                name="password"
                                prefix={<LockTwoTone style={{ color: '#1890ff' }}/>}
                                type="password"
                                placeholder="password" size="large"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter password'
                                    }
                                ]}/> 
                        </TabPane>
                        <TabPane tab="Sign in with mobile" key="2">
                        <InputItem 
                                name="mobile"
                                prefix={<MobileTwoTone />}
                                placeholder="mobile phone number" size="large"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter mobile phone number'
                                    }
                                ]}/>
                            <InputItem 
                                name="captcha"
                                prefix={<MailTwoTone />}
                                placeholder="code received" size="large"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter the code you received'
                                    }
                                ]}/>    
                        </TabPane>
                    </Tabs>
                    <Row justify="space-between">
                            <Checkbox 
                                checked={autoLogin}
                                onChange={(e) => setAutoLogin(e.target.checked)}>
                                    Auto Login
                            </Checkbox>
                            <a href="#">Forget password</a>
                        </Row>   
                    <SubmitButton>Sign in</SubmitButton>
                </Form>
                <div className={styles.other}>
                    Other Login Ways
                    <AlipayCircleOutlined className={styles.icon} />
                    <TaobaoCircleOutlined className={styles.icon} />
                    <WeiboCircleOutlined className={styles.icon} />
                    <Link className={styles.register} to="/register">
                        Register
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Login;
import React from 'react';
import { Tabs, Form } from 'antd';
import { UserOutlined, LockTwoTone } from '@ant-design/icons';
import InputItem from '../../components/InputItem';
import SubmitButton from '../../components/SubmitButton';
import styles from './index.module.less';

const { TabPane } = Tabs;

const Login = () => {
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
                            dsads
                        </TabPane>
                    </Tabs>
                    <SubmitButton>Sign in</SubmitButton>
                </Form>
            </div>
        </div>
    )
};

export default Login;
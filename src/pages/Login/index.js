import React from 'react';
import { Tabs } from 'antd';
import InputItem from '../../components/InputItem';
import styles from './index.module.less';

const { TabPane } = Tabs;

const Login = () => {
    return(
        <div className={styles.loginContainer}>
            <div className={styles.login}>
                {/* set the defaultActiveKey as 1, so the tab will be highlighted by default */}
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Sign in with username" key="1">
                        <InputItem placeholder="username" size="large"/>
                    </TabPane>
                    <TabPane tab="Sign in with mobile" key="2">
                        dsads
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
};

export default Login;
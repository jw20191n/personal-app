import React from 'react';
import { Tabs } from 'antd';
import styles from './index.module.less';

const { TabPane } = Tabs;

const Login = () => {
    return(
        <div className={styles.loginContainer}>
            {/* set the defaultActiveKey as 1, so the tab will be highlighted by default */}
            <Tabs defaultActiveKey="1">
                <TabPane tab="username and password login" key="1">
                    adsads
                </TabPane>
                <TabPane tab="phone number login" key="2">
                    dsads
                </TabPane>
            </Tabs>
        </div>
    )
};

export default Login;
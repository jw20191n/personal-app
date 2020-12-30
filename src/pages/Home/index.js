import React, { useState } from 'react';
import { Row, Col, Card, Divider } from 'antd';
import { ContactsOutlined, ClusterOutlined, HomeOutlined} from '@ant-design/icons';
import Articles from './components/Articles';
import Projects from './components/Projects';
import Applications from './components/Applications';
import { currentUser, fakeList } from './data';
import styles from './index.module.less';

const operationTabList = [{ 
    key: 'articles',
    tab: (
        <span>
            Article <span>(8)</span>
        </span>
    )
},
{ 
    key: 'applications',
    tab: (
        <span>
            App <span>(18)</span>
        </span>
    )
},
{ 
    key: 'projects',
    tab: (
        <span>
            Project <span>(10)</span>
        </span>
    )
}];

const renderChildrenByTabKey = (tabKey) => {
    switch (tabKey){
        case 'projects':
            return <Projects />;
        case 'applications': 
            return <Applications />;
        case 'articles':
            default: 
            return <Articles />
    }
}

const renderUserInfo = (currentUser) => (
    <div className={styles.detail}>
        <p>
            <ContactsOutlined className={styles.userInfoIcon}/>
            {currentUser.title}
        </p>
        <p>
            <ClusterOutlined className={styles.userInfoIcon}/>
            {currentUser.group}
        </p>
        <p>
            <HomeOutlined className={styles.userInfoIcon}/>
            { (currentUser.geographic || {province: {lable: ''}}).province.label
            }
            { (currentUser.geographic || {city: {lable: ''}}).city.label
            }
        </p>
    </div>
)

const Home = () => {
    const [tabKey, setTabKey] = useState('articles');
    //change the prop key as the activeKey
    const onTabChange = (key) => {
        setTabKey(key);
    }

    return(
        <div className={styles.container}>
            <Row gutter={24}>
                <Col lg={7} md={24}>
                    <Card bordered={false} style={{ marginBottom: 24 }}>
                        <div className={styles.avatarHolder}>
                            <img alt="" src={currentUser.avatar}/>
                            <div className={styles.name}>
                                {currentUser.name}
                            </div>
                            <div>{currentUser.signature}</div>
                        </div>
                        {renderUserInfo(currentUser)}
                        <Divider dashed/>
                    </Card>
                </Col>
                <Col lg={17} md={24}>
                    <Card 
                        bordered={false}
                        tabList={operationTabList}
                        activeTabKey={tabKey}
                        onTabChange={onTabChange}
                        >
                        { renderChildrenByTabKey(tabKey) }
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Home;
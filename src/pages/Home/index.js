import React, { useState } from 'react';
import { Row, Col, Card } from 'antd';
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
                        asdas
                    </Card>
                </Col>
                <Col lg={17} md={24}>
                    <Card 
                        bordered={false}
                        tabList={operationTabList}
                        activeTabKey={tabKey}
                        onTabChange={onTabChange}
                        >
                        { 
                            tabKey === 'articles' && 'Articles'
                        }
                        { 
                            tabKey === 'applications' && 'Applications'
                        }
                        { 
                            tabKey === 'projects' && 'Projects'
                        }
                       
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Home;
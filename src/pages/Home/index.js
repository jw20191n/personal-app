import React from 'react';
import { Row, Col, Card } from 'antd';
import styles from './index.module.less';

const Home = () => {
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
                        tabList={[ { 
                            key: 'article',
                            tab: 'Article'
                        },
                        { 
                            key: 'applications',
                            tab: 'App'
                        },
                        { 
                            key: 'projects',
                            tab: 'Projects'
                        } ]}
                    >
                        pqstr
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Home;
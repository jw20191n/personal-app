import React from 'react';
import { Avatar } from 'antd';
import moment from 'moment';
import styles from './index.module.less';

const ArticleListContent =  ({data: { content, avatar,href, owner, updateAt }} )=> (
    <div>
        <div>{content}</div>
        <div className={styles.extra}>
            <Avatar src={avatar} size="small" />
            <a href={href}>{owner}</a>published at<a href={href}>{href}</a>
            <em>{moment(updateAt).format('YYYY-MM-DD')}</em>
        </div>
    </div>
)

export default ArticleListContent
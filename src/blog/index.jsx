import React, { Component } from 'react';

import Layout from '../components/layout/';
import { Row, Col,Tag,List, Avatar, Icon } from 'antd';

class App extends Component {
    render() {

        const listData = [];
        for (let i = 0; i < 5; i++) {
            listData.push({
                href: 'http://ant.design',
                title: `ant design part ${i}`,
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            });
        }

        const pagination = {
            pageSize: 10,
            current: 1,
            total: listData.length,
            onChange: (() => {}),
        };

        const IconText = ({ type, text }) => (
            <span>
    <Icon type={type} style={{ marginRight: 8 }} />
                {text}
  </span>
        );

        return (
            <Layout>
                <Row>
                    <Col span={5} push={19}>
                        <div>
                            <Tag color="magenta">java</Tag>
                            <Tag color="red">react</Tag>
                            <Tag color="volcano">redis</Tag>
                            <Tag color="orange">mongodb</Tag>
                            <Tag color="gold">javascript</Tag>
                            <Tag color="lime">nio</Tag>
                            <Tag color="green">netty</Tag>
                            <Tag color="cyan">分布式</Tag>
                            <Tag color="blue">多线程</Tag>
                            <Tag color="geekblue">高并发</Tag>
                            <Tag color="purple">hadoop</Tag>
                        </div>
                    </Col>
                    <Col span={19} pull={5}>
                        <List
                            itemLayout="vertical"
                            size="large"
                            pagination={pagination}
                            dataSource={listData}
                            renderItem={item => (
                                <List.Item
                                    key={item.title}
                                    actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.avatar} />}
                                        title={<a href={item.href}>{item.title}</a>}
                                        description={item.description}
                                    />
                                    {item.content}
                                </List.Item>
                            )}
                        />
                    </Col>
                </Row>
            </Layout>
        );
    }
}

export default App;

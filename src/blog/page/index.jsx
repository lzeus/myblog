import React, { Component } from 'react';

import Layout from '../../components/layout/';
import MDReactComponent from 'markdown-react-js';

import { Row, Col,Tag,List, Avatar, Icon, Card } from 'antd';

class App extends Component {
    render() {
        return (
            <Layout>
                <Row
                    style={{backgroundColor:'white'}}
                >
                    <Col span={5} push={19}>
                        <Card
                            title="标签"
                            style={{ width: '100%'}}
                            bordered={false}
                        >
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
                        </Card>
                    </Col>
                    <Col span={19} pull={5}>
                        <Card
                            title="搞懂 Java IO-面向流的IO"
                            extra={<a href="#">More</a>}
                            style={{ width: '100%'}}
                            bordered={false}
                        >
                            <MDReactComponent text='
## 1. 预备知识
### 1.1. 系统调用

遵循POSIX规范的操作系统，将内核提供的各项系统服务包装为系统调用，向C语言提供服务调用入口。

- 这些系统调用以C语言的同名函数申明在unistd.h中。
- 系统调用函数与普通函数在使用上没有区别。
- 每一次系统调用当前进程就会从用户态切换到内核态。

![](https://github.com/lzeus/mydata/raw/master/SYSTEM/linux/%E5%86%85%E6%A0%B8%E4%BD%93%E7%B3%BB%E5%9B%BE.png)
图1-1



unix系统的部分系统调用如图1-2




![](https://github.com/lzeus/mydata/raw/master/SYSTEM/linux/%E7%B3%BB%E7%BB%9F%E8%B0%83%E7%94%A8.bmp)


图1-2
' />
                        </Card>
                    </Col>
                </Row>
            </Layout>
        );
    }
}

export default App;

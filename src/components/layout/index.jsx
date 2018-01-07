import React, { Component } from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;


class App extends Component {

    static defaultProps = {
        selectedKey:'home',
    }

    constructor(props){
        super(props);
        this.defaultSelectedKeys = [];
    }

    componentWillMount(){
        this.defaultSelectedKeys = [];
        this.defaultSelectedKeys.push(this.props.selectedKey);
    }

    render() {

        return (
            <Layout>
                <Header style={{ position: 'fixed', width: '100%' }}>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={this.defaultSelectedKeys}
                        style={{ lineHeight: '64px' ,float:'right'}}
                    >
                        <Menu.Item key="home">Home</Menu.Item>
                        <Menu.Item key="blog">Blog</Menu.Item>
                        <Menu.Item key="about">About</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '20px 40px', marginTop: 64 }}>
                    {this.props.children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Copyright © lzeus.liu的博客 2017
                </Footer>
            </Layout>
        );
    }
}

export default App;

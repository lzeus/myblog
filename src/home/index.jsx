import React, { Component } from 'react';

import Layout from '../components/layout/';
import { Row, Col,Tag,List, Avatar, Icon } from 'antd';

class App extends Component {

    constructor(props){
        super(props)
        this.state={
            selectedKey:1
        };
    }
    render() {
        return (
            <Layout
                selectedKey="home"
            >

            </Layout>
        );
    }
}

export default App;

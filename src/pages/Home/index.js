import React from "react"
import Header from "../../components/Header"
import Navleft from "../../components/NavLeft"
import menuConfig from "../../contains/menuConfig"
import {Row, Col} from 'antd';

export default class Home extends React.Component {
    constructor() {
        super();
    }
    state={};
    componentWillMount(){
        this.setState({
            menuConfig
        })
    }

    render() {
        return (
            <div>
                <div className="welcome-page">
                    <Header username={"珠峰培训"}/>
                    <Row>
                        <Col span={3} className="nav-left"><Navleft menuList={this.state.menuConfig}/></Col>
                        <Col span={21} className="right-container">{this.props.children}</Col>
                    </Row>
                </div>
            </div>
        )
    }
}
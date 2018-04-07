import React, {Component} from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import menuConfig from "../../contains/menuConfig";
import {Menu} from "antd"

const SubMenu = Menu.SubMenu;

class Navleft extends Component {
    constructor() {
        super()
    }

    componentWillMount() {
        let menuList = this.props.menuList;
        let menus = this.listMenu(menuList);
        let key = window.location.hash;
        this.setState({
            menus,
            selectedKeys:key
        })
    }

    listMenu = (data, key = "") => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu key={key + item.key} title={item.title}>
                        {this.listMenu(item.children, key + item.key)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item key={key + item.key} name={item.title}>
                    <Link to={key + item.key}>{item.title}</Link>
                </Menu.Item>
            )
        })
    };

    render() {
        return (
            <div>
                <Menu
                    className="nav-left"
                    // mode='inline'
                    mode='vertical'
                    // mode='dark'
                    selectedKeys={[this.state.selectedKeys]}
                >
                    {this.state.menus}
                </Menu>
            </div>
        )
    }
}

export default connect()(Navleft);

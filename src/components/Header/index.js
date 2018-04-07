import React, {Component} from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {Row,Col,Icon} from  "antd"
import {Link} from  "react-router-dom"
import history from "../../history"
class Header extends Component{
    constructor(){
        super()
    }
    render(){
        return (
           <div className="header">
               <Row>
                   <Col span={18}>
                       <Link to="/home">
                           珠峰培训ERP系统
                       </Link>
                   </Col>
                   <Col span={6}>
                       <div style={{float:"right",fontSize:14}}>
                           <Icon type="smile-o" />欢迎，{this.props.username}
                           <a className="anticon" onClick={this.logout}>退出</a>
                       </div>

                   </Col>
               </Row>

           </div>
        )
    }
    logout=()=>{
        history.push("/")
    }
}

export default connect()(Header);

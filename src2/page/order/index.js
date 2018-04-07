import React, {Component} from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
class Order extends Component{
    constructor(){
        super()
    }
    render(){
        return (
           <div>
               Order
           </div>
        )
    }
}

export default connect()(Order);

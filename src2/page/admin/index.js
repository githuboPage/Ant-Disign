import React, {Component} from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
class Admin extends Component{
    constructor(){
        super()
    }
    render(){
        return (
           <div>
               Admin
           </div>
        )
    }
}

export default connect()(Admin);

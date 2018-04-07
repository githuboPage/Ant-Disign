
import React, {Component} from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
class App extends Component{
    constructor(){
        super()
    }
    render(){
        return (
           <div>
               {this.props.children}
           </div>
        )
    }
}

export default connect()(App);

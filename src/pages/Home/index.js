import React from "react"
export default class Home extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>Home{this.props.children}
      </div>
    )
  }
}
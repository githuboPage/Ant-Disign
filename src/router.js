import React,{Component} from "react"
import {Link,Switch,Route,Redirect,Router} from "react-router-dom"
import history from "./history"
import App from "./App"
import Login from "./pages/Login"
import Admin from "./pages/Admin"
import Home from "./pages/Home"
import Order from "./pages/Order"
export default class ERoute extends Component{
  render(){
    return(
      <Router history={history}>
        <Route path="/">
          <App>
            <Switch>
              <Route exact path="/" component={Login}></Route>
              <Route path="/home">
                <Home>
                  <Switch>
                    <Route exact path='/home' component={Admin}></Route>
                    <Route path='/home/order' component={Order}></Route>
                    <Redirect to="/home"></Redirect>
                  </Switch>
                </Home>
              </Route>
              <Redirect to="/"></Redirect>
            </Switch>
          </App>
        </Route>
      </Router>
    )
  }
}
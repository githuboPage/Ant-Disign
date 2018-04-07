import React from "react"
import {Link, Switch, Route, Router, Redirect} from "react-router-dom"
import history from "./history"
import {Provider} from "react-redux"
import store from "./store/index"
import App from "./App"
import Login from "./page/login/index"
import Order from "./page/order/index"
import Home from "./page/home/index"
import Admin from "./page/admin/index"
export default class ERoute extends React.Component {
    render() {
        return (
            <Provider stort={store}>
                <Router history={history}>
                    <Switch>
                        <Route path="/">
                            <App>
                                <switch>
                                    <Route exact path="/" component={Login}/>
                                    <Route path="/home">
                                        <Home>
                                            <Switch>
                                                <Route exact path="/home" component={Admin}/>
                                                <Route exact path="/home/order" component={Order}/>
                                                <Redirect path="/home"/>
                                            </Switch>
                                        </Home>
                                    </Route>
                                    <Redirect path="/"/>
                                </switch>
                            </App>
                        </Route>
                    </Switch>
                </Router>
            </Provider>

        )
    }

}
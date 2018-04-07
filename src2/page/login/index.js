import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Input, Button } from "antd";
import BaseServise from "../../comonent/baseServise"
import urls from "../../comonent/contones/urls"
const FormItem = Form.Item;

class Login extends Component {
    render() {
        loginSubmit=(value)=>{
            BaseServise.ajax({
                url:urls.login,
                data:value,
                isMock:true
            }).then((response)=>{
                if(response.data.code ==0){
                    histoty.push("/home")

                }
            })

        };
        return (
            <div className="login-page">
                <div className="login-content-wrap">
                    <div className="login-content">
                        <div className="word">
                            {" "}
                            珠峰培训<br />ERP管理系统
                        </div>
                        <div className="login-box">
                            <div className="title">欢迎你</div>
                            <LoginForm loginSubmit={this.loginSubmit}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {};

class LoginForm extends React.Component {
    checkUserName = (rule, value, callback) => {
        let reg = /1\d{10}/;
        if (!value) {
            callback("请输入用户名");
        } else if (!reg.test(value)) {
            callback("用户名错误");
        } else {
            callback();
        }
    };

    render() {
        const {
            getFieldDecorator,
            getFieldsError,
            getFieldError,
            isFieldTouched
        } = this.props.form;
        return (
            <Form>
                <FormItem>
                    {getFieldDecorator("username", {
                        rules: [{ required: true, validator: this.checkUserName }]
                    })(<Input placeholder="请输入用户名" />)}
                </FormItem>
                <FormItem>
                    {getFieldDecorator("password", {
                        rules: [{ required: true, message: "Please input your Password!" }]
                    })(<Input placeholder="请输入密码" type="password" />)}
                </FormItem>
                <FormItem>
                    <Button type="primary" className="login-form-button">
                        登陆
                    </Button>
                </FormItem>
            </Form>
        );
    }
}
LoginForm = Form.create({})(LoginForm);

export default Login;

import React from "react"
import "./index.less"
import BaseServer from "../../baseServer"
import urls from "../../contains/urls"
import  history from "../../history"
import {Form, Icon, Input, Button} from "antd"
const  FormItem=Form.Item;
export default class Login extends React.Component{
  constructor(){
    super();
  }
  loginSubmit=(value)=>{
    BaseServer.ajax({
      url:urls.login,
      data:value,
      isMock:true
    }).then((response)=>{
      console.log(response);
      if (response.data.code==0) {
        history.push("/home")
      }else {
        alert("请求失败")
      }
    })
  };
  render(){
    return(
      <div className="login-page">
        <div className='login-content-wrap'>
          <div className="login-content">
            <div className='word'>珠峰培训 <br/>  ERP系统</div>
            <div className="login-box">
              <div className="title">欢迎您</div>
              <LoginFrom loginSubmit={this.loginSubmit}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class LoginFrom extends React.Component{
  checkUserName=(rule, value, callback)=>{
    let reg=/^1\d{10}$/;
    if(!value){
      callback("请输入Username")
    }else if(!reg.test(value)){
      callback("请输入正确的UserName")
    }
      else {
      callback()
    }
  };
  submitLogin=()=>{
    let data=this.props.form.getFieldsValue();
    this.props.loginSubmit(data)
  };
  render(){
    const {getFieldDecorator} =this.props.form;
    return (
      <Form>
        <FormItem>
          {getFieldDecorator("username",{
            rules:[
              {validator:this.checkUserName}
            ]
          })(<Input  placeholder="username"/>)}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password",{
            rules:[
              {require:true,message:"请输入密码"}
            ]
          })(<Input  placeholder="passWord" type="password"/>)}
        </FormItem>
        <FormItem>
          <Button type="primary" className="login-form-button"
                  onClick={this.submitLogin}
          >登录</Button>
        </FormItem>
      </Form>
    )
  }
}
LoginFrom=Form.create({})(LoginFrom);
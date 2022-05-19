import React from "react";
import './LoginControll.css'

// 登录文字
function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}
// 登录按钮
function LoginButton(props) {
    return <button onClick={props.onClick}>Login</button>;
}
// 未登录状态
function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}
// 登出按钮
function LogoutButton(props) {
    return <button onClick={props.onClick}>Logout</button>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}
// 控制登录状态
class LoginControll extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }
    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }
    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {
                    isLoggedIn ? 
                    <LogoutButton onClick={this.handleLogoutClick} /> : 
                    <LoginButton onClick={this.handleLoginClick} />
                }
            </div>
        );
    }
}

export default LoginControll;

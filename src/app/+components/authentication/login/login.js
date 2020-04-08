import React, { Component } from 'react'
import './login.css';

class LoginControl extends Component {
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
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>;
        }else{
            button = <LoginButton onClick={this.handleLoginClick}/>;
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        );
    }
}

function UserGreeting(){
    return <h1>Welcome back!</h1>
}

function GuestGreeting(){
    return <h1>Please sign up.</h1>
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting/>;
    }
    return <GuestGreeting/>;
}

function LoginButton(props){
    return (
        <button className="btn-login" onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props){
    return (
        <button className="btn-logout" onClick={props.onClick}>
            Logout
        </button>
    );
}

export default LoginControl;
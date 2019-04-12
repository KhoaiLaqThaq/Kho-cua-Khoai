import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// function FormattedDate(props){
//     return <h2>It is {props.date.toLocaleTimeString()}</h2>
// }
//
// class Clock extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {date: new Date()};
//     }
//
//     tick(){
//         this.setState({
//             date: new Date()
//         });
//     }
//
//     componentDidMount(){
//         this.timeID = setInterval(
//             () =>this.tick(),
//             1000
//         );
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.timeID);
//     }
//
//     componentWillMount() {
//
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Hello, world</h1>
//                 <FormattedDate date={this.state.date}/>
//             </div>
//         )
//     }
// }
//
// function tick(){
//     ReactDOM.render(
//         <Clock/>,
//         document.getElementById('root')
//     );
// }
//
// setInterval(tick, 1000);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// function ActionLink(){
//     function handleClick(e) {
//         e.preventDefault();
//         console.log('The link was clicked');
//     }
//
//     return (
//         <a href="#" onClick={handleClick}>
//             Click me
//         </a>
//     )
// }
//
// class Toggle extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {isToggleOn: true};
//         //This binding is necessary to make `this` work in the callback
//         this.handleClick = this.handleClick.bind(this);
//     }
//
//     handleClick(){
//         this.setState(state => ({
//             isToggleOn: !state.isToggleOn
//         }));
//     }
//
//     render() {
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn ? 'ON':'OFF'}
//             </button>
//         );
//     }
// }
//
// class LoggingButton extends React.Component{
//     handleClick = () => {
//         console.log('this is:', this);
//     }
//
//     render(){
//         return (
//             <button onClick={this.handleClick}>
//                 Click me
//             </button>
//         );
//     }
// }

class LoginControl extends React.Component {
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
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props){
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

ReactDOM.render(
    <LoginControl/>,
    document.getElementById('root')
)

serviceWorker.unregister();

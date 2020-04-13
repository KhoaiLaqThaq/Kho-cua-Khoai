import React, { useState } from 'react';
import './common.css';
import FuncHooks from './funcHooks';

/** React Hook useState */
const CountApp = () => {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}

export default class AboutComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        // const [count, setCount] = useState(0);
        return (
            <div className="about-container">
                <h1>Copyright @ Hangdz</h1>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Click me</button>
                <div>
                    <CountApp/>
                    <FuncHooks/>
                </div>
            </div>
        )
    }
}
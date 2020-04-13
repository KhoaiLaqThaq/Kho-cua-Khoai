import React, { useState, useEffect } from 'react';

const EffectHooks = () => {
    const [count, setCount] = useState(0)
    // similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

class HooksComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`;
    }

    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`;
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <p>You clicked {this.state.count} times</p>
                    <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                        Click me
                    </button>
                </div>
                <div>
                    <EffectHooks/>
                </div>
            </React.Fragment>
        )
    }

}

export default HooksComponent;
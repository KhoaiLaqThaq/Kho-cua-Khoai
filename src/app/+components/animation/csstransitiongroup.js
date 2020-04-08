import React from 'react';
import { TransitionGroup } from 'react-transition-group';

import './animation.css';

class CSSTransitionGroupComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = { items: ['Blockchain', 'ReactJS', 'TypeScript', 'VueJs'] };
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        const newItems = this.state.items.concat([
            prompt('Enter Item Name')
        ]);
        this.setState({ items: newItems });
    }

    handleRemove(i) {
        let newItems = this.state.items.slice();
        newItems.slice(i, 1);
        this.setState({ items: newItems });
    }

    render() {
        const items = this.state.items.map((item, i) => (
            <div key={item} onClick={() => this.handleRemove(i)}>
                { item }
            </div>
        ));
        return (
            <div>
                <h1>Animation Example</h1>
                <button onClick={this.handleAdd}>Insert Item</button>
                <TransitionGroup 
                    transitionName="example"
                    transitionEnterTimeout={800}
                    transitionLeaveTimeout={600}>
                    { items }
                </TransitionGroup>
            </div>
        );
    }

}

export default CSSTransitionGroupComponent;
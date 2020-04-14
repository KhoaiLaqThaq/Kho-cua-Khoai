import React from 'react';
import { Route, Link } from 'react-router-dom';

import './common.css';

const Contacts = ({ match }) => <p>{match.params.id}</p>

export default class ContactComponent extends React.Component {
    render() {

        return (
            <div className="contact-container">
                <h2>Contact: (+84) 36 645 1025</h2>
                <h4>Email: contact@gmail.com</h4>
                <ul>
                    <li>
                        <Link to="/contact/1">Contacts 1</Link>
                    </li>
                    <li>
                        <Link to="/contact/2">Contacts 2</Link>
                    </li>
                    <li>
                        <Link to="/contact/3">Contact 3</Link>
                    </li>
                    <li>
                        <Link to="/contact/4">Contact 4</Link>
                    </li>
                </ul>
                <Route path="/contact/:id" component={Contacts}></Route>
            </div>
        )
    }
}
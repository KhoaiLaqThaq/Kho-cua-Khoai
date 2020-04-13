import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LazyLoad from 'react-lazyload';

import './index.css';
import * as serviceWorker from './serviceWorker';

import HomeComponent from './app/+components/decor/home';
import AboutComponent from './app/+components/common/about';
import ContactComponent from './app/+components/common/Contact';
import LoginComponent from './app/+components/authentication/login/login';
import NotFound from './app/+components/common/err/notfound';
import CSSTransitionGroupComponent from './app/+components/animation/csstransitiongroup';
import ThemeSwitcherComponent from './app/+components/theme/themeSwitcher';
import DataTableItemsComponent from './app/+components/common/data-table/datatable-items';
import HooksComponent from './app/+components/hooks/EffectHooks';


const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/animation">Animation</Link>
                </li>
                <li>
                    <Link to="/themeSwitcher">Theme Switcher</Link>
                </li>
                <li>
                    <Link to="/datatable">Items</Link>
                </li>
                <li>
                    <Link to="/hooks">Hooks</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route exact path="/about" component={AboutComponent} />
                <Route path="/contact" component={ContactComponent} />
                <Route exact path="/login" component={LoginComponent} />
                <Route exact path="/animation" component={CSSTransitionGroupComponent} />
                <Route exact path="/themeSwitcher" component={ThemeSwitcherComponent} />
                <Route exact path="/datatable" component={() => (
                    <LazyLoad>
                        <DataTableItemsComponent/>
                    </LazyLoad>
                )} />
                <Route exact path="/hooks" component={HooksComponent}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();

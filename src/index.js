import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Search from './components/Search';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Search}/>
        </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));

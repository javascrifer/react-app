import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Component from './component'

export const history = createHistory({ basename: '/user' });

export default class Router extends React.Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact path="*" component={Component} />
                </Switch>
            </ConnectedRouter>
        );
    }
}
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Login from './pages/Login';
import App from './App';
import Header from './layout/Header';
import Cotacao from './pages/Cotacao';

export default function Routes() {

    return (
        <div className='content-wrapper'>
            <Header />
            <Switch>
                <Route path='/' component={App} exact />
                <Route path='/cotacao' component={Cotacao} />
                <Route path='/login' component={Login} />
                <Redirect from='*' to='/' />
            </Switch>
        </div>
    )
}   
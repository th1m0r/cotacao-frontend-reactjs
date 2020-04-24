import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Login from './pages/Login';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Cotacao from './pages/Cotacao';
import CotacaoResposta from './pages/CotacaoResposta'

export default function Routes() {

    return (
        <>
            <Header />
            <main role="main" className="flex-shrink-0">
                <div className="container-fluid">
                    <Switch>
                        <Route path='/login' component={Login} />
                        <Route path="/cotacao/:id_cotacao/responder" component={CotacaoResposta} />
                        <Route path='/' component={Cotacao} exact />
                        <Redirect from='*' to='/' />
                    </Switch>
                </div>
            </main>
            <Footer />
        </>
    )
}   
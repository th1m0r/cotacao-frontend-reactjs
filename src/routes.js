import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom'

import Login from './pages/Login';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Cotacao from './pages/Cotacao';
import CotacaoResposta from './pages/CotacaoResposta';
import Mensagem from './components/Mensagem';

export default function Routes() {

    return (
        <>
            <BrowserRouter>
                <Header />
                <Mensagem />
                <div className="content-wrapper">
                    <Switch>
                        <Route path='/login' component={Login} />
                        <Route path="/" component={CotacaoResposta} exact />
                        <Route path='/cotacoes' component={Cotacao} exact />
                        <Redirect from='*' to='/' />
                    </Switch>
                </div>
                <Footer />
            </BrowserRouter>
        </>
    )
}   
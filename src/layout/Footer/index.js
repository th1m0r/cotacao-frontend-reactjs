import React from 'react';

import aratu from '../../assets/aratu.png'

export default function footer() {

    return (
        <footer className="main-footer">
            <strong>Copyright &copy; 2020 <a href="fake_url">TM Automação</a>.</strong> Todos os direitos reservados.
            <div className="float-right d-none d-sm-inline">
                <img alt="AratuAPP" src={aratu} className="mr-2" width="36" />
                <b>Version</b> 1.0.0
            </div>
        </footer>
    )
}
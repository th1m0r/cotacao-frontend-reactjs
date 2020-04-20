import React from 'react';
import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

import './styles.css';
import logo from '../../assets/tm.png'

export default function Header() {
    const { user } = useSelector((state) => state.auth);

    return (
        <nav className="l-header navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink to="/list" activeClassName="active" className="navbar-brand">
                <img alt="TM Automação" src={logo} className="img-circle" style={{width: 80}}/>
            </NavLink>

            <ul className="navbar-nav">
                <p className="nav-item mt-2 mr-3"><strong>Fornecedor:&nbsp;</strong>{user.user.fornecedor.cnpj}{" - "}{user.user.fornecedor.razaoSocial}</p>
            </ul>
            <ul className="navbar-nav ml-md-auto">
                <p className="nav-item mt-2 mr-3"><strong>Vendedor:&nbsp;</strong>{user.user.nome}</p>
            </ul>
        </nav>
    );
}
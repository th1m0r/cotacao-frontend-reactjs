import React from 'react';
import { NavLink } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { doLogout } from '../../store/auth';
import { FaSignOutAlt } from "react-icons/fa";

import './styles.css';
import logo from '../../assets/tm.png'

export default function Header({ history }) {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(doLogout());
    }

    return (

        <nav className="main-header navbar navbar-expand-md navbar-light navbar-dark">
            <NavLink to="/" className="navbar-brand mt-1">
                <img alt="TM Automação" src={logo} className="brand-image " />
                <span className="brand-text font-weight-light">TM Automação</span>
            </NavLink>

            <ul className="navbar-nav ml-3">
                <li className="nav-item">
                    <span className="navbar-text"><strong>Fornecedor:&nbsp;</strong>{user.user.fornecedor.cnpj}{" - "}{user.user.fornecedor.razaoSocial}</span>
                </li>
            </ul>

            <ul className="navbar-nav ml-md-auto">
                <li className="nav-item">
                    <span className="navbar-text mr-2"><strong>Vendedor:&nbsp;</strong>{user.user.nome}</span>
                </li>
            </ul>
            <button type="button" onClick={logout} className="btn btn-sm btn-primary">
                <FaSignOutAlt size="1.3em" />
            </button>
        </nav>
    );
}
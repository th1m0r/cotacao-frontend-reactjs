import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authLogin } from '../../store/fetchActions'

import logo from '../../assets/aratu.png'
import tmautomacao from '../../assets/logo-tmautomacao.png'
import tm from '../../assets/tm.png'
import Footer from '../../layout/Footer';

const Login = () => {
    const [usuario, setUsuario] = useState({ username: '', password: '' });

    const dispatch = useDispatch();
    const usernameInput = React.createRef();

    const handleSubmit = async event => {
        event.preventDefault();
        dispatch(authLogin(usuario));
        setUsuario({ username: '', password: '' });
        usernameInput.current.focus();
    }

    return (
        <>
            <nav className="main-header navbar navbar-expand-md navbar-light navbar-dark">
                <div className="navbar-brand mt-1">
                    <img alt="TM Automação" src={tmautomacao} className="brand-image" />
                </div>
                <div className="navbar-brand mt-1 ml-auto">
                    <img alt="TM Automação" src={tm} className="brand-image" />
                </div>
            </nav>
            <div className="content-wrapper">
                <div className="content-header" />
                <div className="content" style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 300,
                    margin: 'auto'
                }}>
                    <img alt="AratuAPP" src={logo} style={{ width: 240 }} />
                    <form method="post"
                        onSubmit={handleSubmit}
                        style={{ width: "100%" }}>
                        <h2 className="text-center mt-4 mb-2" style={{
                            margin: "0 0 30px",
                            fontSize: "1em"
                        }}>Login do sistema</h2>
                        <div className="form-group">
                            <input type="text"
                                className="form-control"
                                value={usuario.username}
                                onChange={e => setUsuario({ ...usuario, username: e.target.value })}
                                placeholder="Digite o usuário"
                                autoComplete="off"
                                ref={usernameInput} />
                        </div>
                        <div>
                            <input type="password"
                                className="form-control"
                                value={usuario.password}
                                onChange={e => setUsuario({ ...usuario, password: e.target.value })}
                                placeholder="Digite a senha"
                                autoComplete="off" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mt-3">ENTRAR</button>
                    </form >
                </div>
            </div>
            <Footer />
        </>
    );
};
export default Login;

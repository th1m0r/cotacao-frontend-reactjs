import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authLogin } from '../../store/fetchActions'

import logo from '../../assets/aratu.png'


const Login = () => {
    const [usuario, setUsuario] = useState({ username: '', password: '' });

    const dispatch = useDispatch();

    const handleSubmit = async event => {
        event.preventDefault();
        dispatch(authLogin(usuario));
        setUsuario({ username: '', password: '' })
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: 400,
            margin: '40px auto',
            marginTop: "50vh",
            padding: "20px 30px",
            transform: "translateY(-50%)",
        }}>
            <img alt="AratuAPP" src={logo} style={{ width: 280 }} />
            <form method="post"
                onSubmit={handleSubmit} 
                style={{width: "100%"}}>
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
                        autoFocus />
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
    );
};
export default Login;

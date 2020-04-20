import React, { useState } from 'react';
import { connect } from 'react-redux';

import api from '../../services/api';
import { doLogin } from '../../redux/loginSlice';

// import { Container } from './styles';

const mapDispatch = { doLogin };
const Login = ({ doLogin }) => {
    const [usuario, setUsuario] = useState({ nome: '', senha: '' });

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const response = await api.post('/login', usuario);
            doLogin(response.data);
            setUsuario({ nome: '', senha: '' });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            <div>
                <label>Usuário</label>
                <input type="text"
                    value={usuario.nome}
                    onChange={e => setUsuario({ ...usuario, nome: e.target.value })}
                    placeholder="Digite o usuário"
                    autoComplete="off"
                    autoFocus />
            </div>
            <div>
                <label>Senha</label>
                <input type="password"
                    value={usuario.senha}
                    onChange={e => setUsuario({ ...usuario, senha: e.target.value })}
                    placeholder="Digite a senha"
                    autoComplete="off" />
            </div>
            <button type="submit">ENTRAR</button>
        </form>
    );
};
export default connect(null, mapDispatch)(Login);

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import api from './services/api';
import { validateToken } from './store/fetchActions'

import Routes from './routes'
import Login from './pages/Login'
import Mensagem from './components/Mensagem';

const AuthOrApp = ({ children }) => {
    const { user, valid } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            dispatch(validateToken(user.token));
        }
    }, [dispatch, user]);

    if (user && valid) {
        api.interceptors.request.use(async config => {
            config.headers.Authorization = `Bearer ${user.token}`;
            return config;
        })
    }

    return (
        <>
            <Mensagem />
            {user && valid &&
                <Routes>{children}</Routes>
            }
            {!user && !valid &&
                <Login />
            }
        </>
    )
}
export default AuthOrApp;
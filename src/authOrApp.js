import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { validate } from './store/auth';


import Routes from './routes'
import Login from './pages/Login'
import Mensagem from './components/Mensagem';

const AuthOrApp = ({ children }) => {

    const { user, valid } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            dispatch(validate(user.token));
        }
    }, [dispatch, user]);

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
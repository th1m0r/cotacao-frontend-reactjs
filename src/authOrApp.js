import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Routes from './routes'
import Login from './pages/Login'
import { validate } from './store/auth';


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
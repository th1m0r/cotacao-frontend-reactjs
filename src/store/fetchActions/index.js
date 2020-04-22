import api from '../../services/api';
import { doLogin } from '../auth';
import { loadCotacao } from '../cotacao';

const userKey = "@aratu-Token";

export const authLogin = user => {
    return dispatch => {
        api
            .post('/login', user)
            .then(resp => {
                localStorage.setItem(userKey, JSON.stringify(resp.data));
                dispatch(doLogin());
                window.location.pathname = '/';
            })
            .catch(console.log);
    }
}

export const getCotacao = () => {
    return dispatch => {
        api
            .get('/cotacoes/55')
            .then(resp => {
                dispatch(loadCotacao(resp.data))
            })
            .catch(console.log);
    }
}
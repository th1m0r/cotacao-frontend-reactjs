import api from '../../services/api';
import { doLogin, doValidate } from '../auth';
import { toastr } from 'react-redux-toastr'

const userKey = "@aratu-Token";

export const validateToken = token => {
    return dispatch =>
        api
            .post('/validar', { token })
            .then(resp => {
                dispatch(doValidate(resp.data.valido))
            })
            .catch(err => toastr.error('Erro', err.response.data.message))
}

export const authLogin = user => {
    return dispatch => {
        api
            .post('/login', user)
            .then(resp => {
                localStorage.setItem(userKey, JSON.stringify(resp.data));
                dispatch(doLogin());
                window.location.pathname = '/';
            })
            .catch(err => {
                if (err.response.data) {
                    toastr.error('Erro', err.response.data.message);
                }
                else {
                    toastr.error('Erro', 'Sem conexão com o servidor');
                }
            });
    }
}
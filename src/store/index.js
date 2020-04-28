import { configureStore } from '@reduxjs/toolkit';
import { reducer as toastrReducer } from 'react-redux-toastr';

import authReducer from './auth';
import cotacaoReducer from './cotacao'

export default configureStore({
	reducer: {
		auth: authReducer,
		cotacao: cotacaoReducer,
		toastr: toastrReducer
	}
});
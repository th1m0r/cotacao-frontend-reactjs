import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth';
import cotacaoReducer from './cotacao'

export default configureStore({
	reducer: {
		auth: authReducer,
		cotacao: cotacaoReducer
	}
});
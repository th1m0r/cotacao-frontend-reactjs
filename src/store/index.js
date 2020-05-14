import { configureStore } from '@reduxjs/toolkit';
import { reducer as toastrReducer } from 'react-redux-toastr';

import authReducer from './auth';

export default configureStore({
	reducer: {
		auth: authReducer,
		toastr: toastrReducer
	}
});
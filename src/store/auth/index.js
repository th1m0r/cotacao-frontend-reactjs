import { createSlice } from '@reduxjs/toolkit';

const userKey = "@aratu-Token";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: JSON.parse(localStorage.getItem(userKey)),
        valid: false
    },
    reducers: {
        doLogin(state, action) {
            state.user = action.payload
            state.valid = true
        },
        doLogout(state) {
            localStorage.removeItem(userKey);
            state.user = null;
            state.valid = false;
        },
        validate(state, action) {
            state.valid=true;
        }
    }
});
export const { doLogin, doLogout, validate } = authSlice.actions;
export default authSlice.reducer;
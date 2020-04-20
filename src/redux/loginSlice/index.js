import { createSlice } from '@reduxjs/toolkit';

const userKey = "@aratu-Token";

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        user: JSON.parse(localStorage.getItem(userKey)),
        valid: false
    },
    reducers: {
        doLogin(state, action) {
            localStorage.setItem(userKey, JSON.stringify(action.payload))
            state.user = action.payload
            state.valid = true
        },
        doLogout(state, action) {
            localStorage.removeItem(userKey);
            state.user = null;
            state.valid = false;
        }
    }
});
export const { doLogin, doLogout } = loginSlice.actions;
export default loginSlice.reducer;
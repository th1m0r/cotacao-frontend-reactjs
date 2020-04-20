import { combineReducers } from 'redux'
import loginReducer from './loginSlice'

export default combineReducers({
  login: loginReducer
})

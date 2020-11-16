import { createStore, combineReducers } from 'redux'
import authReducer from './reducers/authReducer'

const rootReducer = combineReducers({
  authReducer,
})

const store = createStore(
  rootReducer,
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);

export default store
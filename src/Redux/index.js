import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import authReducer from './reducers/authReducer'
import commentReducer from './reducers/commentReducer'
import thunk from 'redux-thunk'
import reduxLogger from 'redux-logger'

const rootReducer = combineReducers({
  auth: authReducer,
  comment: commentReducer,
})

const middleware = [thunk, reduxLogger]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store
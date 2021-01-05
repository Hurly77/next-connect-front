import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import authReducer from './reducers/authReducer'
import commentReducer from './reducers/commentReducer'
import thunk from 'redux-thunk'
import reduxLogger from 'redux-logger'
import postReducer  from './reducers/postReducer'
import searchReducer from './reducers/searchReducer'
import friendsReducer from './reducers/friendsReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  comment: commentReducer,
  post: postReducer,
  search: searchReducer,
  friends: friendsReducer,
})

const middleware = [thunk, reduxLogger]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store
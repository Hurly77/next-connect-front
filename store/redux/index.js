import {
	createStore,
	combineReducers,
	applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './reducers/authReducer';
import commentReducer from './reducers/commentReducer';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import postReducer from './reducers/postReducer';
import searchReducer from './reducers/searchReducer';
import friendsReducer from './reducers/friendsReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	comment: commentReducer,
	post: postReducer,
	search: searchReducer,
	friends: friendsReducer,
});

const middleware = [thunk, reduxLogger];

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;

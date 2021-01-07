const authReducer = (
	state = {
		loggedIn       : false,
		currentUser    : {},
	},
	action,
	) => {
		switch (action.type) {
		case 'AUTH_SUCCESS':
			return {
				...state,
				loggedIn    : action.payload.loggedIn,
				currentUser : action.payload.currentUser,
			};

		case 'UPDATE_USER':
			return {
				...state,
				currentUser: action.payload.currentUser
			}
			
			case 'UPLOAD_AVATAR':
				return {
					...state,
					currentUser: action.payload.currentUser
				}
			
			case 'UPDATE_PROPS':
				return{
					...state,
					currentUser: action.payload.currentUser
				}

		case 'LOGOUT':
			return {
				...state,
				loggedIn    : false,
				currentUser : {},
			};
			
		default:
			return state;
	}
};

export default authReducer;

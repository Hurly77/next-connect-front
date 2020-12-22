const friendsReducer = (
	state = {
    friends: [],
		pendingFriends: [],
		requests: []
	},
	action,
) => {
	switch (action.type) {
		case 'FRIENDS':
			return {
				...state,
				friends        : action.payload.friends,
				pendingFriends : action.payload.pendingFriends,
				requests: action.payload.requests
			};

		case 'DENY':
			return {
				...state,
				pendingFriends: action.payload.pendingFriends,
				requests: action.payload.requests,
			}
			
			case 'ACCEPTED':
				return {
					...state,
					friends: action.payload.friends,
				}

			case 'REQUEST':
				return {
					...state,
					pendingFriends: action.payload.friends,
				}

		default:
					return state;
			}
};

export default friendsReducer;

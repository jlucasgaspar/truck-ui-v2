import { User } from 'models/User';
import { IUserActions, IUserState, UserActionTypes } from 'store/types/user';

const initialState: IUserState = {
	user: {} as User
}

export const userReducer = (state = initialState, action: IUserActions): IUserState => {
	switch (action.type) {
		case UserActionTypes.SET_USER:
			return { ...state, user: action.payload }

		default:
			return state;
	}
}
import { User } from "models";
import { UserActions, UserState, UserActionsTypes } from "store/types";

const initialState: UserState = {
	user: {} as User.Model
}

export const userReducer = (state = initialState, action: UserActions): UserState => {
	switch (action.type) {
		case UserActionsTypes.SET_USER:
			return { ...state, user: action.payload }

		default:
			return state;
	}
}
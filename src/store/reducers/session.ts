import { SessionActions, SessionState, SessionActionsTypes } from "store/types";

const initialState: SessionState = {
	isFirstFetch: true,
	isAuthenticated: false
}

export const sessionReducer = (state = initialState, action: SessionActions): SessionState => {
	switch (action.type) {
		case SessionActionsTypes.INIT_SESSION:
			return { ...state, isAuthenticated: true }

		case SessionActionsTypes.FINISH_SESSION:
			return { ...state, isAuthenticated: false }

		case SessionActionsTypes.IS_FIRST_FETCH:
			return { ...state, isFirstFetch: action.payload }

		default:
			return state;
	}
}
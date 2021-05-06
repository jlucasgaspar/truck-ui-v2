import { ISessionActions, ISessionState, SessionActionTypes, } from 'store/types/session';

const initialState: ISessionState = {
	getSessionWasAlreadyCalled: false,
	isAuthenticated: false
}

export const sessionReducer = (state = initialState, action: ISessionActions): ISessionState => {
	switch (action.type) {
		case SessionActionTypes.INIT_SESSION:
			return { ...state, isAuthenticated: true }

		case SessionActionTypes.FINISH_SESSION:
			return { ...state, isAuthenticated: false }

		case SessionActionTypes.GET_SESSION_WAS_ALREADY_CALLED:
			return { ...state, getSessionWasAlreadyCalled: action.payload }

		default:
			return state;
	}
}
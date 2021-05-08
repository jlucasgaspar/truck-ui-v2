import { ISessionActions, ISessionState, SessionActionTypes, } from 'store/types/session';

const initialState: ISessionState = {
	isFirstFetch: true,
	isAuthenticated: false
}

export const sessionReducer = (state = initialState, action: ISessionActions): ISessionState => {
	switch (action.type) {
		case SessionActionTypes.INIT_SESSION:
			return { ...state, isAuthenticated: true }

		case SessionActionTypes.FINISH_SESSION:
			return { ...state, isAuthenticated: false }

		case SessionActionTypes.IS_FIRST_FETCH:
			return { ...state, isFirstFetch: action.payload }

		default:
			return state;
	}
}
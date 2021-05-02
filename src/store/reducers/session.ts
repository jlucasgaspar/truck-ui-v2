import { ISessionActions, ISessionState, SessionActionTypes, } from 'store/types/session';

const initialState: ISessionState = {
	isAuthenticated: false,
	tokenInfo: '' // TODO remover isso depois
}

export const sessionReducer = (state = initialState, action: ISessionActions): ISessionState => {
	switch (action.type) {
		case SessionActionTypes.INIT_SESSION:
			return {
				...state, isAuthenticated: true,
				tokenInfo: action.payload // TIRAR DEPOIS
			}

		case SessionActionTypes.FINISH_SESSION:
			return {
				...state, isAuthenticated: false,
				tokenInfo: '' // TIRAR DEPOIS
			}

		default:
			return state;
	}
}
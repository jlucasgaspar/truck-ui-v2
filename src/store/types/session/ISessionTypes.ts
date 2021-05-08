import { SessionActionTypes } from './SessionActionTypes';

// State
export type ISessionState = {
	isFirstFetch: boolean;
	isAuthenticated: boolean;
}

// Actions
type Init = {
	type: typeof SessionActionTypes.INIT_SESSION;
}

type Finish = {
	type: typeof SessionActionTypes.FINISH_SESSION;
}

type SetIsFirstFetch = {
	type: typeof SessionActionTypes.IS_FIRST_FETCH;
	payload: boolean;
}

export type ISessionActions = Init | Finish | SetIsFirstFetch;
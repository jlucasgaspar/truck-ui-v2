import { SessionActionTypes } from './SessionActionTypes';

// State
export type ISessionState = {
    getSessionWasAlreadyCalled: boolean;
    isAuthenticated: boolean;
}

// Actions
type InitSession = {
    type: typeof SessionActionTypes.INIT_SESSION;
}
type FinishSession = {
    type: typeof SessionActionTypes.FINISH_SESSION;
}
type SetGetSessionWasAlreadyCalled = {
    type: typeof SessionActionTypes.GET_SESSION_WAS_ALREADY_CALLED;
    payload: boolean;
}
export type ISessionActions = InitSession | FinishSession | SetGetSessionWasAlreadyCalled;
import { SessionActionTypes } from './SessionActionTypes';

// State
export type ISessionState = {
    isAuthenticated: boolean;
    tokenInfo: any; // TODO remover isso depois
}

// Actions
type InitSession = {
    type: typeof SessionActionTypes.INIT_SESSION;
    payload: any;
}
type FinishSession = {
    type: typeof SessionActionTypes.FINISH_SESSION;
}
export type ISessionActions = InitSession | FinishSession;
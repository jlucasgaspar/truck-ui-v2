// Actions Types List;
export enum SessionActionsTypes {
  INIT_SESSION = "INIT_SESSION",
  FINISH_SESSION = "FINISH_SESSION",
  IS_FIRST_FETCH = "IS_FIRST_FETCH"
}

// State;
export type SessionState = {
  isFirstFetch: boolean;
  isAuthenticated: boolean;
}

// Actions;
export type SessionActions = Init | Finish | SetIsFirstFetch;

type Init = { type: typeof SessionActionsTypes.INIT_SESSION; }
type Finish = { type: typeof SessionActionsTypes.FINISH_SESSION; }
type SetIsFirstFetch = { type: typeof SessionActionsTypes.IS_FIRST_FETCH; payload: boolean; }
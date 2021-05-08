import { SessionActionTypes } from 'store/types/session';

class SessionAction {
  public init = () => ({
    type: SessionActionTypes.INIT_SESSION
  });

  public finish = () => ({
    type: SessionActionTypes.FINISH_SESSION
  });

  public setIsFirstFetch = (trueOrFalse: boolean) => ({
    type: SessionActionTypes.IS_FIRST_FETCH,
    payload: trueOrFalse
  });
}

export const sessionActions = new SessionAction();
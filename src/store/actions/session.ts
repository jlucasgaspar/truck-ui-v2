import { SessionActionsTypes } from "store/types";

class SessionAction {
  public init = () => ({
    type: SessionActionsTypes.INIT_SESSION
  });

  public finish = () => ({
    type: SessionActionsTypes.FINISH_SESSION
  });

  public setIsFirstFetch = (trueOrFalse: boolean) => ({
    type: SessionActionsTypes.IS_FIRST_FETCH,
    payload: trueOrFalse
  });
}

export const sessionActions = new SessionAction();
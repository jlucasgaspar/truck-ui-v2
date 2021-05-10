import { User } from "models";
import { UserActionsTypes } from "store/types";

class UsersActions {
  public setUser = (user: User.Model) => ({
    type: UserActionsTypes.SET_USER,
    payload: user
  });
}

export const userActions = new UsersActions();
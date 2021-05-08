import { User } from 'models/User';
import { UserActionTypes } from 'store/types/user';

class UsersActions {
  public setUser = (user: User) => ({
    type: UserActionTypes.SET_USER,
    payload: user
  });
}

export const userActions = new UsersActions();
import { ThunkAction } from 'redux-thunk';
import { User } from 'models/User';
import { IRootState } from 'store/store';
import { IUserActions, UserActionTypes } from 'store/types/user';

type IThunkAction = ThunkAction<void, IRootState, null, IUserActions>;

export const setUser = (user: User): IThunkAction => (dispatch) => dispatch({
    type: UserActionTypes.SET_USER,
    payload: user
});
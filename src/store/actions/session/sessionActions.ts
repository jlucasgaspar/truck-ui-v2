import { ThunkAction } from 'redux-thunk';
import { IRootState } from 'store/store';
import { ISessionActions, SessionActionTypes } from 'store/types/session';

type IThunkAction = ThunkAction<void, IRootState, null, ISessionActions>;

export const setInitSession = (): IThunkAction => dispatch => dispatch({
	type: SessionActionTypes.INIT_SESSION
});

export const setFinishSession = (): IThunkAction => dispatch => dispatch({
	type: SessionActionTypes.FINISH_SESSION
});

export const setGetSessionWasAlreadyCalled = (trueOrFalse: boolean): IThunkAction => dispatch => dispatch({
	type: SessionActionTypes.GET_SESSION_WAS_ALREADY_CALLED,
	payload: trueOrFalse
});
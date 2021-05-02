import { ThunkAction } from 'redux-thunk';
import { IRootState } from 'store/store';
import { ISessionActions, SessionActionTypes } from 'store/types/session';

type IThunkAction = ThunkAction<void, IRootState, null, ISessionActions>;

export const setInitSession = (payload: any): IThunkAction => (dispatch) => dispatch({
	type: SessionActionTypes.INIT_SESSION,
	payload: payload // TODO: Tirar isso depois
});

export const setFinishSession = (): IThunkAction => (dispatch) => dispatch({
	type: SessionActionTypes.FINISH_SESSION
});
import { ThunkAction } from 'redux-thunk';
import { IRootState } from 'store/store';
import { ILoadingAction, LoadingActionTypes } from 'store/types/loading';

type IThunkAction = ThunkAction<void, IRootState, null, ILoadingAction>;

export const setLoadingTo = (isLoading: boolean): IThunkAction => (dispatch) => dispatch({
	type: LoadingActionTypes.SET_LOADING,
	payload: isLoading
});

export const setLoadingSessionTo = (isLoading: boolean): IThunkAction => (dispatch) => dispatch({
	type: LoadingActionTypes.SET_LOADING_SESSION,
	payload: isLoading
});
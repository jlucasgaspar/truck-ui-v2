import { firebaseAuth } from 'config/firebase';
import { ThunkAction } from 'redux-thunk';
import { setBearerTokenToAuthorizationHeaders } from 'services/api';
import { IRootState } from 'store/store';
import { ISessionActions } from 'store/types/session';
import { setLoadingSessionTo, setLoadingTo } from 'store/actions/loading';
import { setFinishSession } from './sessionActions';

type IThunkAction = ThunkAction<void, IRootState, null, ISessionActions>;

export const handleLogout = (): IThunkAction => async (dispatch) => {
	setBearerTokenToAuthorizationHeaders(null);
	await firebaseAuth.signOut();
	dispatch(setLoadingSessionTo(false));
	dispatch(setLoadingTo(false));
	return dispatch(setFinishSession());
}
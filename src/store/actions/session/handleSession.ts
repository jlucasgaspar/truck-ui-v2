import { ThunkAction } from 'redux-thunk';
import { handleToast } from 'utils/toast';
import { firebaseAuth } from 'config/firebase';
import { setBearerTokenToAuthorizationHeaders } from 'services/api';
import { handleError } from 'utils/errors';
import { IRootState } from 'store/store';
import { ISessionActions } from 'store/types/session';
import { setLoadingSessionTo } from 'store/actions/loading';
import { handleLogout } from './handleLogout';
import { setInitSession } from './sessionActions';

type IThunkAction = ThunkAction<void, IRootState, null, ISessionActions>;

export const handleSession = (): IThunkAction => async (dispatch) => {
	return firebaseAuth.onIdTokenChanged(async (user) => {
		try {
			if (!user) return dispatch(handleLogout());
			dispatch(setLoadingSessionTo(true));
			const token = await user.getIdToken();
			setBearerTokenToAuthorizationHeaders(token);
			dispatch(setInitSession());
			return dispatch(setLoadingSessionTo(false));
		} catch (err) {
			const errorMessage = handleError.generateMessage(err);
			handleToast.error(errorMessage);
			return dispatch(handleLogout());
		}
	});
}
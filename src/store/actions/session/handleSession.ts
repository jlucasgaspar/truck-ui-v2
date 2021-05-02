import { ThunkAction } from 'redux-thunk';
import { toastr } from 'react-redux-toastr';
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

			// TODO remover isso dps e manter só o initSession
			// dispatch(initSession());
			const { token: tokenConfirmation, authTime, expirationTime, issuedAtTime } = await user.getIdTokenResult();
			dispatch(setInitSession({ token, tokenConfirmation, authTime, expirationTime, issuedAtTime }));
			return dispatch(setLoadingSessionTo(false));
		} catch (err) {
			const errorMessage = handleError.generateMessage(err);
			toastr.error(errorMessage, '');
			return dispatch(handleLogout());
		}
	});
}
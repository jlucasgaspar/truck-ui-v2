import { ThunkAction } from 'redux-thunk';
import { handleToast } from 'utils/toast';
import { IUser } from 'models/User';
import { firebaseAuth } from 'config/firebase';
import { handleError } from 'utils/errors';
import { IRootState } from 'store/store';
import { setLoadingTo } from 'store/actions/loading';
import { ISessionActions } from 'store/types/session';
import { handleLogout } from 'store/actions/session';

type IThunkAction = ThunkAction<void, IRootState, null, ISessionActions>;
type IParams = IUser.FormFields.Login;

export const handleLogin = ({ email, password }: IParams): IThunkAction => async (dispatch) => {
	try {
		dispatch(setLoadingTo(true));
		const { user } = await firebaseAuth.signInWithEmailAndPassword(email, password);
		if (user) handleToast.success(`Bem-vindo, ${user.displayName || email}!`);
		return dispatch(setLoadingTo(false));
	} catch (err) {
		const errorMessage = handleError.generateMessage(err);
		handleToast.error(errorMessage);
		dispatch(setLoadingTo(false));
		return dispatch(handleLogout());
	}
}
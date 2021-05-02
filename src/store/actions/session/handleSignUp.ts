import { ThunkAction } from 'redux-thunk';
import { handleToast } from 'utils/toast';
import { IUser, User } from 'models/User';
import { firebaseAuth } from 'config/firebase';
import { api } from 'services/api';
import { handleError } from 'utils/errors';
import { validateInput } from 'utils/validators';
import { IRootState } from 'store/store';
import { ISessionActions } from 'store/types/session';
import { handleLogout } from './handleLogout';
import { setUser } from '../user';
import { setLoadingTo } from '../loading';

type IThunk = ThunkAction<void, IRootState, null, ISessionActions>;
type IParams = IUser.FormFields.SignUp;

export const handleSignUp = ({ email, name, password, phone }: IParams): IThunk => async (dispatch) => {
	try {
		const phoneValidated = validateInput.phone(phone);
		if (phoneValidated.error) {
			handleToast.error(phoneValidated.error);
			return;
		}
		const validatedPhone = phoneValidated.digits;

		dispatch(setLoadingTo(true));
		const { user } = await firebaseAuth.createUserWithEmailAndPassword(email, password);
		if (!user) return dispatch(handleLogout());
		const id = user.uid;
		await user.updateProfile({ displayName: name });
		const userBody: IUser.HttpRequest.CreateBody = { id, name, email, phone: validatedPhone }
		const { data } = await api.post<User>('/users', userBody);
		dispatch(setUser(data));
		dispatch(setLoadingTo(false));
		handleToast.success(`Bem-vindo, ${name}!`);
	} catch (err) {
		const errorMessage = handleError.generateMessage(err);
		handleToast.error(errorMessage);
		return dispatch(handleLogout());
	}
}
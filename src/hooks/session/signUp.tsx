import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IUser, User } from 'models/User';
import { firebaseAuth } from 'config/firebase';
import { api } from 'services';
import { userActions, sessionActions } from 'store/actions';
import { handleError, validateInput } from 'utils';
import { useToast } from '../toast';

export const useSignup = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { toast } = useToast()

  const signUp = useCallback(async ({ email, name, password, phone }: IUser.FormFields.SignUp) => {
    try {
      setLoading(true);
      const phoneValidated = validateInput.phone(phone);
      if (phoneValidated.error) {
        toast.error(phoneValidated.error);
        return;
      }
      const validatedPhone = phoneValidated.digits;
      const { user } = await firebaseAuth.createUserWithEmailAndPassword(email, password);
      if (!user) return dispatch(sessionActions.finish());
      const id = user.uid;
      await user.updateProfile({ displayName: name });
      const userBody: IUser.HttpRequest.CreateBody = { id, name, email, phone: validatedPhone }
      const { data } = await api.post<User>('/users', userBody);
      dispatch(userActions.setUser(data));
      toast.success(`Bem-vindo, ${name}!`);
      setLoading(false);
    } catch (err) {
      const errorMessage = handleError.generateMessage(err);
      toast.error(errorMessage);
      setLoading(false);
      return dispatch(sessionActions.finish());
    }
  }, [dispatch, toast]);

  return { signUp, isLoading }
}
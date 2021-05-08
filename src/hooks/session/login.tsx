import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IUser } from 'models/User';
import { firebaseAuth } from 'config/firebase';
import { handleError } from 'utils';
import { sessionActions } from 'store/actions';
import { useToast } from '../toast';

export const useLogin = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { toast } = useToast();

  const login = useCallback(async ({ email, password }: IUser.FormFields.Login) => {
    try {
      setLoading(true);
      const { user } = await firebaseAuth.signInWithEmailAndPassword(email, password);
      if (user) toast.success(`Bem-vindo, ${user.displayName || email}!`);
      setLoading(false);
    } catch (err) {
      const errorMessage = handleError.generateMessage(err);
      toast.error(errorMessage);
      setLoading(false);
      return dispatch(sessionActions.finish());
    }
  }, [dispatch, toast]);

  return { login, isLoading }
}
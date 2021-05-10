import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Company, User } from "models";
import { api, ApiEndpoints } from "services";
import { IRootState } from "store";
import { companyActions, userActions, sessionActions } from "store/actions";
import { handleError } from "utils";
import { useToast } from "../toast";

type ISessionInfoResponse = { user: User.Model; company?: Company.Model; }

export const useGetSessionInfo = () => {
  const { isFirstFetch } = useSelector((state: IRootState) => state.sessionState);
  const [isLoading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();
  const { toast } = useToast()

  const getSessionInfo = useCallback(async () => {
    try {
      if (isFirstFetch === false) return;
      setLoading(true);
      const { data } = await api.get<ISessionInfoResponse>(ApiEndpoints.get.sessionData);
      dispatch(sessionActions.setIsFirstFetch(false));
      dispatch(userActions.setUser(data.user));
      if (data.company) dispatch(companyActions.setCompany(data.company));
      setLoading(false);
    } catch (err) {
      dispatch(sessionActions.setIsFirstFetch(true));
      const message = handleError.generateMessage(err);
      setLoading(false);
      return toast.error(message);
    }
  }, [dispatch, isFirstFetch, toast]);

  return { getSessionInfo, isLoading }
}
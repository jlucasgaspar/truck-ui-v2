import { ThunkAction } from 'redux-thunk';
import { IRootState } from 'store/store';
import { CompanyActionTypes, ICompanyActions } from 'store/types/company';
import { Company } from 'models/Company';

type IThunkAction = ThunkAction<void, IRootState, null, ICompanyActions>;

export const setCompany = (company: Company): IThunkAction => (dispatch) => dispatch({
	type: CompanyActionTypes.SET_COMPANY,
	payload: company
});
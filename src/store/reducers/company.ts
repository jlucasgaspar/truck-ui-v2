import { Company } from 'models/Company';
import { CompanyActionTypes, ICompanyActions, ICompanyState } from 'store/types/company';

const initialState: ICompanyState = {
  company: {} as Company
}

export const companyReducer = (state = initialState, action: ICompanyActions): ICompanyState => {
  switch (action.type) {
    case CompanyActionTypes.SET_COMPANY:
      return { ...state, company: action.payload }

    default:
      return state;
  }
}
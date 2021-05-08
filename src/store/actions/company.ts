import { CompanyActionTypes } from 'store/types/company';
import { Company } from 'models/Company';

class CompanyActions {
  public setCompany = (company: Company) => ({
    type: CompanyActionTypes.SET_COMPANY,
    payload: company
  });
}

export const companyActions = new CompanyActions();
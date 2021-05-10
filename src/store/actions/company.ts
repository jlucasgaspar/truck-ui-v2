import { Company } from "models";
import { CompanyActionsTypes } from "store/types";

class CompanyActions {
  public setCompany = (company: Company.Model) => ({
    type: CompanyActionsTypes.SET_COMPANY,
    payload: company
  });
}

export const companyActions = new CompanyActions();
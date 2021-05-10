import { Company } from "models";
import { CompanyActionsTypes, CompanyActions, CompanyState } from "store/types";

const initialState: CompanyState = {
  company: {} as Company.Model
}

export const companyReducer = (state = initialState, action: CompanyActions): CompanyState => {
  switch (action.type) {
    case CompanyActionsTypes.SET_COMPANY:
      return { ...state, company: action.payload }

    default:
      return state;
  }
}
import { Company } from "models";

// Actions Types List;
export enum CompanyActionsTypes {
  SET_COMPANY = "SET_COMPANY"
}

// State;
export type CompanyState = {
  company: Company.Model;
}

// Actions;
export type CompanyActions = SetCompany;

type SetCompany = { type: typeof CompanyActionsTypes.SET_COMPANY; payload: Company.Model }
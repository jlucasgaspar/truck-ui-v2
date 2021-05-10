export namespace User {
  export type Model = {
    id: string;
    company_id: string;
    name: string;
    email: string;
    phone: string;
    created_at: Date;
    updated_at: Date;
  }

  export namespace HttpRequest {
    export type CreateBody = Pick<Model, "id" | "name" | "email" | "phone">;
  }

  export namespace Store {
    export type Authenticated = Pick<Model, "id" | "company_id" | "name" | "email"> & UserClaims;
  }

  export namespace FormFields {
    export type SignUp = Pick<Model, "name" | "email" | "phone"> & Password & ConfirmPassword;
    export type Login = Pick<Model, "email"> & Password;
  }

  // Don"t export these types below. Internal use only;
  type Password = { password: string; }
  type ConfirmPassword = { confirmPassword: string; }
  type UserClaims = {
    role: string;
    company_name: string;
    company_id: string;
    company_logo_url: string;
  }
}
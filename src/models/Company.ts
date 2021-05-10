export namespace Company {
  export type Model = {
    id: string;
    nome_fantasia: string;
    razao_social: string;
    cnpj: string;
    inscricao_estadual: string;
    address: string;
    phone: string;
    comercial_phone: string;
    logo_url: string;
    owner_name: string;
    owner_cpf: string;
    created_at: Date;
    updated_at: Date;
  }

  export namespace HttpRequest {
    export type CreateBody = Omit<Model, "id" | Timestamps>;
  }

  export namespace FormFields {
    export type Create = Omit<Model, "id" | "logo_url" | "address" | Timestamps> & Logo & AddressOptionsFields;
  }

  // Don"t export these types below. Internal use only;
  type Timestamps = "created_at" | "updated_at";
  type Logo = { logo?: FileList; }
  type AddressOptionsFields = {
    addressComplement: string;
    addressNumber: number;
    addressStreet: string;
    state: string;
  }
};
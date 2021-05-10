export namespace Driver {
  export type Model = {
    id: string;
    company_id: string;
    name: string;
    cpf: string;
    cnh: string;
    phone: string;
    photo_url: string;
    created_at: Date;
    updated_at: Date;
  }

  export namespace HttpRequest {
    export type CreateBody = Omit<Model, "id" | "company_id" | Timestamps>;
    export type UpdateBody = Omit<Model, Timestamps>;
  }

  export namespace Store {
    export type DriversList = Model[];
    export type CurrentDriver = Model;
  }

  export namespace FormFields {
    export type Create = Omit<Model, "id" | "company_id" | "photo_url" | Timestamps> & PhotoFile;
    export type Update = Omit<Model, "photo_url"> & PhotoFile & ChangePhotoOption;
  }

  // Don"t export these types below. Internal use only;
  type Timestamps = "created_at" | "updated_at";
  type PhotoFile = { photo?: FileList; }
  type ChangePhotoOption = { changePhoto: "y" | "n"; }
}
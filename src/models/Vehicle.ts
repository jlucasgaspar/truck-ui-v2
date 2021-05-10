export namespace Vehicle {
  export type Model = {
    id: string;
    company_id: string;
    description: string;
    //category: string;
    //brand: string;
    //model: string;
    year: string;
    color: string;
    crlv: string;
    renavam: string;
    plate: string;
    owner_rntrc: string;
    owner_name: string;
    owner_uf: string;
    document_url: string;
    created_at: Date;
    updated_at: Date;
  }

  export namespace FormFields {
    export type Create = Omit<Model, "id" | "company_id" | "created_at" | "updated_at">;
  }

  // Don"t export these types below. Internal use only;
  type Timestamps = "created_at" | "updated_at";
}
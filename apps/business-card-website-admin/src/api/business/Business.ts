import { JsonValue } from "type-fest";
import { Service } from "../service/Service";
import { Contact } from "../contact/Contact";

export type Business = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  logo: JsonValue;
  location: string | null;
  services?: Array<Service>;
  contacts?: Array<Contact>;
};

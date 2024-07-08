import { InputJsonValue } from "../../types";
import { ServiceUpdateManyWithoutBusinessesInput } from "./ServiceUpdateManyWithoutBusinessesInput";
import { ContactUpdateManyWithoutBusinessesInput } from "./ContactUpdateManyWithoutBusinessesInput";

export type BusinessUpdateInput = {
  name?: string | null;
  description?: string | null;
  logo?: InputJsonValue;
  location?: string | null;
  services?: ServiceUpdateManyWithoutBusinessesInput;
  contacts?: ContactUpdateManyWithoutBusinessesInput;
};

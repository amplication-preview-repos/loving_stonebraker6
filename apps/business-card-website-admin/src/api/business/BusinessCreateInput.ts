import { InputJsonValue } from "../../types";
import { ServiceCreateNestedManyWithoutBusinessesInput } from "./ServiceCreateNestedManyWithoutBusinessesInput";
import { ContactCreateNestedManyWithoutBusinessesInput } from "./ContactCreateNestedManyWithoutBusinessesInput";

export type BusinessCreateInput = {
  name?: string | null;
  description?: string | null;
  logo?: InputJsonValue;
  location?: string | null;
  services?: ServiceCreateNestedManyWithoutBusinessesInput;
  contacts?: ContactCreateNestedManyWithoutBusinessesInput;
};

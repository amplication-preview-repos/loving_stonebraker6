import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ServiceListRelationFilter } from "../service/ServiceListRelationFilter";
import { ContactListRelationFilter } from "../contact/ContactListRelationFilter";

export type BusinessWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  logo?: JsonFilter;
  location?: StringNullableFilter;
  services?: ServiceListRelationFilter;
  contacts?: ContactListRelationFilter;
};

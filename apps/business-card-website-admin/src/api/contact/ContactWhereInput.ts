import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";

export type ContactWhereInput = {
  id?: StringFilter;
  phone?: StringNullableFilter;
  email?: StringNullableFilter;
  address?: StringNullableFilter;
  business?: BusinessWhereUniqueInput;
};

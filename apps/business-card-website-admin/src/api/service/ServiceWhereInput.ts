import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";

export type ServiceWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  price?: FloatNullableFilter;
  name?: StringNullableFilter;
  business?: BusinessWhereUniqueInput;
};

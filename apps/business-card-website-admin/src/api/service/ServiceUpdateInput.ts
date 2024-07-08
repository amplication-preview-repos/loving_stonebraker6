import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";

export type ServiceUpdateInput = {
  description?: string | null;
  price?: number | null;
  name?: string | null;
  business?: BusinessWhereUniqueInput | null;
};

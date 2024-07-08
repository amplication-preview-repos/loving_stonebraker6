import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";

export type ServiceCreateInput = {
  description?: string | null;
  price?: number | null;
  name?: string | null;
  business?: BusinessWhereUniqueInput | null;
};

import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";

export type ContactUpdateInput = {
  phone?: string | null;
  email?: string | null;
  address?: string | null;
  business?: BusinessWhereUniqueInput | null;
};

import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";

export type ContactCreateInput = {
  phone?: string | null;
  email?: string | null;
  address?: string | null;
  business?: BusinessWhereUniqueInput | null;
};

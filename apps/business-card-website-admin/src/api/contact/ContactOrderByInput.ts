import { SortOrder } from "../../util/SortOrder";

export type ContactOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  phone?: SortOrder;
  email?: SortOrder;
  address?: SortOrder;
  businessId?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type ServiceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  price?: SortOrder;
  name?: SortOrder;
  businessId?: SortOrder;
};

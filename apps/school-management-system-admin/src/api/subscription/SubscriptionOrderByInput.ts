import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  packageField?: SortOrder;
  expirationDate?: SortOrder;
  schoolId?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type FeeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  amount?: SortOrder;
  paymentDate?: SortOrder;
  paymentFrequency?: SortOrder;
  installments?: SortOrder;
  studentId?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type SchoolOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  weekendDays?: SortOrder;
  holidaysCalculation?: SortOrder;
  styles?: SortOrder;
  address?: SortOrder;
  contactDetails?: SortOrder;
  deductionsFrom?: SortOrder;
};

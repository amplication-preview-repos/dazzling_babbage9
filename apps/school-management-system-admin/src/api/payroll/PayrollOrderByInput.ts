import { SortOrder } from "../../util/SortOrder";

export type PayrollOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  baseSalary?: SortOrder;
  allowances?: SortOrder;
  deductions?: SortOrder;
  netSalary?: SortOrder;
  employeeId?: SortOrder;
};

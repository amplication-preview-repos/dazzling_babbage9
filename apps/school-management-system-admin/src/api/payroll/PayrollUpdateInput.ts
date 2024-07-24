import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type PayrollUpdateInput = {
  baseSalary?: number | null;
  allowances?: number | null;
  deductions?: number | null;
  netSalary?: number | null;
  employee?: EmployeeWhereUniqueInput | null;
};

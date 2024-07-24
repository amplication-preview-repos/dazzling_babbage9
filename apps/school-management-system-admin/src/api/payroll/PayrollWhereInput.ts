import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type PayrollWhereInput = {
  id?: StringFilter;
  baseSalary?: FloatNullableFilter;
  allowances?: FloatNullableFilter;
  deductions?: FloatNullableFilter;
  netSalary?: FloatNullableFilter;
  employee?: EmployeeWhereUniqueInput;
};

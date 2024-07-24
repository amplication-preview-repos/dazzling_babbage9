import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { PayrollListRelationFilter } from "../payroll/PayrollListRelationFilter";

export type EmployeeWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  position?: StringNullableFilter;
  salaryDetails?: FloatNullableFilter;
  payrolls?: PayrollListRelationFilter;
};

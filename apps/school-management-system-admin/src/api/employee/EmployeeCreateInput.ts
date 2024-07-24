import { PayrollCreateNestedManyWithoutEmployeesInput } from "./PayrollCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  name?: string | null;
  position?: string | null;
  salaryDetails?: number | null;
  payrolls?: PayrollCreateNestedManyWithoutEmployeesInput;
};

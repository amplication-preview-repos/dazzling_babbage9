import { PayrollUpdateManyWithoutEmployeesInput } from "./PayrollUpdateManyWithoutEmployeesInput";

export type EmployeeUpdateInput = {
  name?: string | null;
  position?: string | null;
  salaryDetails?: number | null;
  payrolls?: PayrollUpdateManyWithoutEmployeesInput;
};

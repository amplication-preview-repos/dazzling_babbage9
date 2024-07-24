import { Payroll } from "../payroll/Payroll";

export type Employee = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  position: string | null;
  salaryDetails: number | null;
  payrolls?: Array<Payroll>;
};

import { Employee } from "../employee/Employee";

export type Payroll = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  baseSalary: number | null;
  allowances: number | null;
  deductions: number | null;
  netSalary: number | null;
  employee?: Employee | null;
};

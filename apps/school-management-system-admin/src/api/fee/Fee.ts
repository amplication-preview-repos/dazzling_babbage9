import { JsonValue } from "type-fest";
import { Student } from "../student/Student";

export type Fee = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  paymentDate: Date | null;
  paymentFrequency?: "Option1" | null;
  installments: JsonValue;
  student?: Student | null;
};

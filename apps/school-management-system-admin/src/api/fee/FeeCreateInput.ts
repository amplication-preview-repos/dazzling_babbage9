import { InputJsonValue } from "../../types";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type FeeCreateInput = {
  amount?: number | null;
  paymentDate?: Date | null;
  paymentFrequency?: "Option1" | null;
  installments?: InputJsonValue;
  student?: StudentWhereUniqueInput | null;
};

import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type FeeWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  paymentDate?: DateTimeNullableFilter;
  paymentFrequency?: "Option1";
  installments?: JsonFilter;
  student?: StudentWhereUniqueInput;
};

import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";

export type SubscriptionWhereInput = {
  id?: StringFilter;
  packageField?: "Option1";
  expirationDate?: DateTimeNullableFilter;
  school?: SchoolWhereUniqueInput;
};

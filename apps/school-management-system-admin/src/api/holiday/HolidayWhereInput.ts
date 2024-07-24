import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type HolidayWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  date?: DateTimeNullableFilter;
};

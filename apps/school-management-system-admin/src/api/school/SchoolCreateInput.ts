import { InputJsonValue } from "../../types";
import { SubscriptionCreateNestedManyWithoutSchoolsInput } from "./SubscriptionCreateNestedManyWithoutSchoolsInput";

export type SchoolCreateInput = {
  name?: string | null;
  weekendDays?: Array<"Option1">;
  holidaysCalculation?: "Option1" | null;
  styles?: InputJsonValue;
  address?: string | null;
  contactDetails?: string | null;
  deductionsFrom?: "Option1" | null;
  subscriptions?: SubscriptionCreateNestedManyWithoutSchoolsInput;
};

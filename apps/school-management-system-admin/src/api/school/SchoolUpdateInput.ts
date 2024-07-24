import { InputJsonValue } from "../../types";
import { SubscriptionUpdateManyWithoutSchoolsInput } from "./SubscriptionUpdateManyWithoutSchoolsInput";

export type SchoolUpdateInput = {
  name?: string | null;
  weekendDays?: Array<"Option1">;
  holidaysCalculation?: "Option1" | null;
  styles?: InputJsonValue;
  address?: string | null;
  contactDetails?: string | null;
  deductionsFrom?: "Option1" | null;
  subscriptions?: SubscriptionUpdateManyWithoutSchoolsInput;
};

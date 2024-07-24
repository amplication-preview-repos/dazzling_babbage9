import { JsonValue } from "type-fest";
import { Subscription } from "../subscription/Subscription";

export type School = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  weekendDays?: Array<"Option1">;
  holidaysCalculation?: "Option1" | null;
  styles: JsonValue;
  address: string | null;
  contactDetails: string | null;
  deductionsFrom?: "Option1" | null;
  subscriptions?: Array<Subscription>;
};

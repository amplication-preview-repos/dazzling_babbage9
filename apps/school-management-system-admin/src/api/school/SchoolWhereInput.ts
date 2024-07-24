import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";

export type SchoolWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  holidaysCalculation?: "Option1";
  styles?: JsonFilter;
  address?: StringNullableFilter;
  contactDetails?: StringNullableFilter;
  deductionsFrom?: "Option1";
  subscriptions?: SubscriptionListRelationFilter;
};

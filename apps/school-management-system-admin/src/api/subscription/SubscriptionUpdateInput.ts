import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";

export type SubscriptionUpdateInput = {
  packageField?: "Option1" | null;
  expirationDate?: Date | null;
  school?: SchoolWhereUniqueInput | null;
};

import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";

export type SubscriptionCreateInput = {
  packageField?: "Option1" | null;
  expirationDate?: Date | null;
  school?: SchoolWhereUniqueInput | null;
};

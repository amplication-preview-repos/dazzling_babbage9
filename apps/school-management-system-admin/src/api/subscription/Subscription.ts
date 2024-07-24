import { School } from "../school/School";

export type Subscription = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  packageField?: "Option1" | null;
  expirationDate: Date | null;
  school?: School | null;
};

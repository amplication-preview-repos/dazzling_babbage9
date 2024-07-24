import { SortOrder } from "../../util/SortOrder";

export type StudentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  customProfile?: SortOrder;
  documents?: SortOrder;
  photos?: SortOrder;
};

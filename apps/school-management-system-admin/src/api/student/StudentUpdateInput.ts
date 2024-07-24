import { InputJsonValue } from "../../types";
import { FeeUpdateManyWithoutStudentsInput } from "./FeeUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  customProfile?: InputJsonValue;
  documents?: InputJsonValue;
  photos?: InputJsonValue;
  fees?: FeeUpdateManyWithoutStudentsInput;
};

import { InputJsonValue } from "../../types";
import { FeeCreateNestedManyWithoutStudentsInput } from "./FeeCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  customProfile?: InputJsonValue;
  documents?: InputJsonValue;
  photos?: InputJsonValue;
  fees?: FeeCreateNestedManyWithoutStudentsInput;
};

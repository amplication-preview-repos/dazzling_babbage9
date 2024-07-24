import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FeeListRelationFilter } from "../fee/FeeListRelationFilter";

export type StudentWhereInput = {
  id?: StringFilter;
  customProfile?: JsonFilter;
  documents?: JsonFilter;
  photos?: JsonFilter;
  fees?: FeeListRelationFilter;
};

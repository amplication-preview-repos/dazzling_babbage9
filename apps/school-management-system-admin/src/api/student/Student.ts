import { JsonValue } from "type-fest";
import { Fee } from "../fee/Fee";

export type Student = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  customProfile: JsonValue;
  documents: JsonValue;
  photos: JsonValue;
  fees?: Array<Fee>;
};

import { School as TSchool } from "../api/school/School";

export const SCHOOL_TITLE_FIELD = "id";

export const SchoolTitle = (record: TSchool): string => {
  return record.id?.toString() || String(record.id);
};

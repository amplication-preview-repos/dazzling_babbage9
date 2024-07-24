import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  DateTimeInput,
  ReferenceInput,
} from "react-admin";
import { SchoolTitle } from "../school/SchoolTitle";

export const SubscriptionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="packageField"
          label="package"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="expirationDate" source="expirationDate" />
        <ReferenceInput source="school.id" reference="School" label="school">
          <SelectInput optionText={SchoolTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

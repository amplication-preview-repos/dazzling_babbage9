import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SCHOOL_TITLE_FIELD } from "./SchoolTitle";

export const SchoolShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="weekendDays" source="weekendDays" />
        <TextField label="holidaysCalculation" source="holidaysCalculation" />
        <TextField label="styles" source="styles" />
        <TextField label="address" source="address" />
        <TextField label="contactDetails" source="contactDetails" />
        <TextField label="deductionsFrom" source="deductionsFrom" />
        <ReferenceManyField
          reference="Subscription"
          target="schoolId"
          label="Subscriptions"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="package" source="packageField" />
            <TextField label="expirationDate" source="expirationDate" />
            <ReferenceField
              label="school"
              source="school.id"
              reference="School"
            >
              <TextField source={SCHOOL_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

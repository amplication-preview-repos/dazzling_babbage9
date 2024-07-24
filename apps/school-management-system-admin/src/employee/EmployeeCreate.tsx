import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PayrollTitle } from "../payroll/PayrollTitle";

export const EmployeeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="position" source="position" />
        <NumberInput label="salaryDetails" source="salaryDetails" />
        <ReferenceArrayInput
          source="payrolls"
          reference="Payroll"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PayrollTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};

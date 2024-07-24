import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PayrollTitle } from "../payroll/PayrollTitle";

export const EmployeeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};

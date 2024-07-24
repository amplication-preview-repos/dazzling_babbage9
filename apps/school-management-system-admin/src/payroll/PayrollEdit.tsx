import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EmployeeTitle } from "../employee/EmployeeTitle";

export const PayrollEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="baseSalary" source="baseSalary" />
        <NumberInput label="allowances" source="allowances" />
        <NumberInput label="deductions" source="deductions" />
        <NumberInput label="netSalary" source="netSalary" />
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="employee"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

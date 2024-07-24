import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SchoolList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Schools"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};

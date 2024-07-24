import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
import { StudentList } from "./student/StudentList";
import { StudentCreate } from "./student/StudentCreate";
import { StudentEdit } from "./student/StudentEdit";
import { StudentShow } from "./student/StudentShow";
import { SchoolList } from "./school/SchoolList";
import { SchoolCreate } from "./school/SchoolCreate";
import { SchoolEdit } from "./school/SchoolEdit";
import { SchoolShow } from "./school/SchoolShow";
import { SubscriptionList } from "./subscription/SubscriptionList";
import { SubscriptionCreate } from "./subscription/SubscriptionCreate";
import { SubscriptionEdit } from "./subscription/SubscriptionEdit";
import { SubscriptionShow } from "./subscription/SubscriptionShow";
import { PayrollList } from "./payroll/PayrollList";
import { PayrollCreate } from "./payroll/PayrollCreate";
import { PayrollEdit } from "./payroll/PayrollEdit";
import { PayrollShow } from "./payroll/PayrollShow";
import { FeeList } from "./fee/FeeList";
import { FeeCreate } from "./fee/FeeCreate";
import { FeeEdit } from "./fee/FeeEdit";
import { FeeShow } from "./fee/FeeShow";
import { HolidayList } from "./holiday/HolidayList";
import { HolidayCreate } from "./holiday/HolidayCreate";
import { HolidayEdit } from "./holiday/HolidayEdit";
import { HolidayShow } from "./holiday/HolidayShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"School Management System"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Employee"
          list={EmployeeList}
          edit={EmployeeEdit}
          create={EmployeeCreate}
          show={EmployeeShow}
        />
        <Resource
          name="Student"
          list={StudentList}
          edit={StudentEdit}
          create={StudentCreate}
          show={StudentShow}
        />
        <Resource
          name="School"
          list={SchoolList}
          edit={SchoolEdit}
          create={SchoolCreate}
          show={SchoolShow}
        />
        <Resource
          name="Subscription"
          list={SubscriptionList}
          edit={SubscriptionEdit}
          create={SubscriptionCreate}
          show={SubscriptionShow}
        />
        <Resource
          name="Payroll"
          list={PayrollList}
          edit={PayrollEdit}
          create={PayrollCreate}
          show={PayrollShow}
        />
        <Resource
          name="Fee"
          list={FeeList}
          edit={FeeEdit}
          create={FeeCreate}
          show={FeeShow}
        />
        <Resource
          name="Holiday"
          list={HolidayList}
          edit={HolidayEdit}
          create={HolidayCreate}
          show={HolidayShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;

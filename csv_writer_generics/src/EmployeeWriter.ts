/**
 * Employee CSV Writer Implementation
 */

import { CSVWriter } from "./index";

interface Employee {
  id: number;
  name: string;
  role: string;
  salary: number;
}


const employeeWriter = new CSVWriter<Employee>(['id', 'name', 'role']);
employeeWriter.addRows([
  { name: 'Lizzie', role: 'Personal Trainer', salary: 1000000, id: 1 },
  { name: 'Isabel', role: 'Electrician', salary: 2000000, id: 2 },
  { name: 'Art', role: 'Hotelier', salary: 3000000, id: 3 },
]);

employeeWriter.log();

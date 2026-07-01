import connectDB from "../config/db.js";

import Employee from "../model/Employee.js";
import Department from "../model/Department.js";

import Departments from "./department.js";

const initDB = async () => {
  try {
    await connectDB();

    await Employee.deleteMany({});
    await Department.deleteMany({});

    // Insert departments
    const insertedDepartments =
      await Department.insertMany(Departments);

    // Find department IDs
    const engineering = insertedDepartments.find(
      d => d.departmentName === "Engineering"
    );

    const marketing = insertedDepartments.find(
      d => d.departmentName === "Marketing"
    );

    const hr = insertedDepartments.find(
      d => d.departmentName === "Human Resources"
    );

    const finance = insertedDepartments.find(
      d => d.departmentName === "Finance"
    );

    const operations = insertedDepartments.find(
      d => d.departmentName === "Operations"
    );

    // Insert employees
    await Employee.insertMany([
      {
        empName: "John Doe",
        age: 28,
        salary: 65000,
        city: "New York",
        departmentId: engineering._id
      },
      {
        empName: "Jane Smith",
        age: 34,
        salary: 82000,
        city: "San Francisco",
        departmentId: marketing._id
      },
      {
        empName: "Michael Chang",
        age: 41,
        salary: 115000,
        city: "Seattle",
        departmentId: engineering._id
      },
      {
        empName: "Emily Rodriguez",
        age: 25,
        salary: 54000,
        city: "Austin",
        departmentId: hr._id
      },
      {
        empName: "David Kim",
        age: 31,
        salary: 72000,
        city: "Chicago",
        departmentId: finance._id
      },
      {
        empName: "Sarah Taylor",
        age: 29,
        salary: 68000,
        city: "Boston",
        departmentId: marketing._id
      },
      {
        empName: "James Wilson",
        age: 45,
        salary: 130000,
        city: "Denver",
        departmentId: operations._id
      }
    ]);

    console.log("Database Initialized Successfully");
    process.exit();
  } catch (error) {
    console.log(error.message);
  }
};

initDB();
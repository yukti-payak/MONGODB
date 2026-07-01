import express from "express";
import connectDB from "./config/db.js";
import Employee from "./model/Employee.js";
import DepartmentModel from "./model/Department.js";



const app = express();
const PORT = 8080;

connectDB();

// match 
const match= await Employee.aggregate([
        {
    $match:{
        department: "Engineering"
    }
}
]);
// console.log(match);


// create field using project
const createField = await Employee.aggregate([
    {
        $project:{
            empName:1,
            salary:1,
            _id:0
        }
    }
]);
// console.log(createField);


// rename using project
const renameField = await Employee.aggregate([{
    $project:{
        _id:0,
        name:"$empName",
        loaction:"$city"
    }
}])
// console.log(renameField);

// create new Field and perform calculation 
const newField = await Employee.aggregate([{
    $project:{
        _id:0,
        totalSalary:{
            $sum:["$salary"]
        }
    }
}])
// console.log(newField);



//$group 

const group = await Employee.aggregate([{
    $group:{
        _id:"$department",
        salary:{$sum:"$salary"}
    }
}])

// console.log(group);


// To find average of salary based on department
const findAverage = await Employee.aggregate([{
    $group:{
        _id:"$department",
        avg: {$avg: "$salary"}
    }
}])

// console.log(findAverage);


// to count documents
const countDocuments = await Employee.aggregate([
  {
    $match: {
      department: "Engineering"
    }
  },
  {
    $count: "totalEmployees"
  }
]);

// console.log(countDocuments);


app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`);
});



import express from "express";
import connectDB from "./config/db.js";
import Employee from "./model/Employee.js";


const app = express();
const PORT = 8080;
connectDB();



// Returns all employees with department information 
const result = await Employee.aggregate([{
    $lookup:{
        from:"departments",                // collection to join with
        localField: "departmentId",        // field inside employee collection 
        foreignField: "_id",               // field inside department collection
        as: "departmentInfo"               // output field
    }
}]);
// console.log(JSON.stringify(result, null, 2));         // json.stringify syntax : JSON.stringify(value, replacer, space)





// using $unwind : It is used to create array into the object 
const info = await Employee.aggregate([
  {
    $lookup:{
      from:"departments",
      localField:"departmentId",
      foreignField:"_id",
      as:"departmentInfo"
    }
  },

  {
    $unwind:"$departmentInfo"
  }
]);
// console.log(JSON.stringify(info, null, 2));



// question 2
const printName = await Employee.aggregate([
    {
        $lookup:{
            from :"departments",
            localField:"departmentId",
            foreignField:"_id",
            as:"departmentInfo"
        }
        
    },{
          
    $unwind:"$departmentInfo"
  },

  {
    $project:{
      _id:0,
      empName:1,
      departmentName:"$departmentInfo.departmentName"
    }
  }
    
])
console.log(JSON.stringify(printName, null, 2));




app.listen(PORT, () =>{
    console.log(`server is running on ${PORT}`);
})
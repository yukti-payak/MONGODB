import mongoose from "mongoose";

const emplyopeeSchema = new mongoose.Schema({
    empName: String,
    age:Number,
    salary:Number,
    department:String,
    city:String
});

const Employee = mongoose.model("Employee" , emplyopeeSchema);

export default Employee;

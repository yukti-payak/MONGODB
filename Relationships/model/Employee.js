import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  empName: String,
  age: Number,
  salary: Number,
  city: String,

  departmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department"
  }
});

export default mongoose.model("Employee", employeeSchema);
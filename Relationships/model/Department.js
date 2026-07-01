import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
  departmentName: String,
  location: String
});

export default mongoose.model("Department", departmentSchema);
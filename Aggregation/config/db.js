import mongoose from "mongoose"

const connectDB = async() =>{
try{
    const connectDB = await mongoose.connect("mongodb://127.0.0.1:27017/aggregation");
    console.log("MONGODB connected successfully");


}catch(error){
    console.log(error.message);

}
}

export default connectDB;



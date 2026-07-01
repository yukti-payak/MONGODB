import Employee from "../model/Employee.js";
import Emplyopees from "../init/data.js";
import connectDB from "../config/db.js";
const initDB = async () =>{
    try{

        connectDB();

        await Employee.deleteMany({});
        const data = await Employee.insertMany(Emplyopees);
        console.log("Data Intialized");
        
    } catch (error){
        console.log(error.message);
    }

}

initDB();
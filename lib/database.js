import mongoose from "mongoose";

const DB_URL='mongodb://localhost:27017/todo';


export const connectDb=async()=>{
    try{
        if(mongoose.connection.readyState === 1){console.log("Already connected!")
            return ;
        }
        // await mongoose.connection(DB_URL,{
        //     dbName:"todoApp"
        // })
        console.log("readystate are connected",mongoose.connection.readyState);
        await mongoose.connect(DB_URL);
        console.log("Datat base are connected")
                console.log("readystate are connected",mongoose.connection.readyState);

    }
    catch(err){
        console.log(err);
        console.log("Database are not connected");
        process.exit(1);        
    }
}
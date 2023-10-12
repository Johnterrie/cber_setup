import * as mongoose from "mongoose";


const connectDB = async (url: string) => {
   try {
     const db = await mongoose.connect(url)
        console.log("Connected to database")
        return db
   } catch (error) {
        console.log("Error connecting to database")
   }
}

export default connectDB
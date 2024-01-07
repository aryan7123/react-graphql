import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_DB_URL = process.env.MONGO_DB_URL;

const Connection = async() => {
    try {
        await mongoose.connect(MONGO_DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("Connected to database successfully");
    } catch (error) {
        console.error(error);
    }
}

export default Connection;
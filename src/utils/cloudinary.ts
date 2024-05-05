import { v2 as cloudinary } from "cloudinary";
import dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
    cloud_name: "dpu6ljn5c",
    api_key: "142135532484953",
    api_secret:"FyvX5LsAUu2fealC5gQyJmXgOLg",
});

export { cloudinary };

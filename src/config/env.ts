import dotenv from "dotenv";
import path from "path";

const envFile = process.env.NODE_ENV === "production"
    ? ".env.prod"
    : ".env.dev";

    

dotenv.config({
    path: path.resolve(process.cwd(), envFile),
});



// ---- Export all env variables as constants ----
export const ENV = {

    PORT: Number(process.env.PORT ?? 8000),

    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID ,
    FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL ,
    FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n") ,

};


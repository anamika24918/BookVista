import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
const app = express()
dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
//connect to mongodb
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("connect to monogo");
} catch (error) {
    console.log("error", error);
}


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
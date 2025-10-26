const express = require("express");
const mongoose=require("mongoose");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const app = express();

app.use(express.json());
app.use("/api/v1/user", userRouter);// mention initial route only futher in user.js
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

async function main(){
    
    await mongoose.connect("mongodb+srv://amanjha13102001_db_user:pbMuplaX8lxvBpNA@cluster0.zzpxg4z.mongodb.net/Course-selling-app");
    app.listen(3000);
    console.log("connected to mongodb")
}
main();

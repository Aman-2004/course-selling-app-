const express=require("express");
const app=express()
app.use(express.json());

app.post("/user/signup",(req,res)=>{
    res.json({message:"This is the signup page"})
})

app.post("/user/signin",(req,res)=>{
    res.json({message:"This is the signin page"})
})

app.post("course/purchase",(req,res)=>{
    res.json({message:"This is to purchase a course"})
})

app.get("/courses",(req,res)=>{
    res.json({message:"This is to see all courses"})
})

app.get("/course/purchase",(req,res)=>{
    res.json({message:"This is to see the purchased courses"})
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})
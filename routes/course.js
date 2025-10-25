const {Router}= require('express');
const courseRouter= Router();

// to purchase a course 
courseRouter.post("/purchase",(req,res)=>{
    res.json({
        message: "Just purchased this course now "
    })
})

// get all courses
courseRouter.get("/preview",(req,res)=>{
    res.json({
        message: "course preview endpoint "
    })
})

module.exports={
    courseRouter: courseRouter
}
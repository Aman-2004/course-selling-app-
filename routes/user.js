const { Router }= require("express");
const userRouter= Router();

//sign up
userRouter.post("/signup", function(req,res){
    res.json({
        message: "signup endpoint"
    })
})

//sign in
userRouter.post("/signin", function(req,res){
    res.json({
        message: "signin endpoint"
    })
})

// user purchased courses
userRouter.get("/purchase", function(req,res){
    res.json({
        message: "User purchased courses endpoint"
    })
})

module.exports={
    userRouter 
};
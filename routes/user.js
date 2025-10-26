const { Router }= require("express");
const { userModel, purchaseModel, courseModel } = require("../db");
const userRouter= Router();

//sign up
userRouter.post("/signup", async function(req,res){
    const { email, password, firstName, lastName } = req.body; // TODO: adding zod validation
    // TODO: hash the password so plaintext pw is not stored in the DB

    // TODO: Put inside a try catch block
    await userModel.create({
        email: email,
        password: password,
        firstName: firstName, 
        lastName: lastName
    })
    
    res.json({
        message: "Signup succeeded"
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
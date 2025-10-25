const { Router } = require("express");
const adminRouter = Router();

// signup endpoint
adminRouter.get("/signup", (req, res) => {
    res.json({
        message: "admin sign up endpoint"
    })
})
// all endpoint below signup and sign in can use admin middleware

// signin endpoint
adminRouter.get("/signin", (req, res) => {
    res.json({
        message: "admin sign in endpoint"
    })
})

// admin can create a course
adminRouter.post("/course", (req, res) => {
    res.json({
        message: "create a course"
    })
})

// upadte a course
adminRouter.put("/course", (req, res) => {
    res.json({
        message: "create a course"
    })
})

// get all course
adminRouter.get("/course/bulk", (req, res) => {
    res.json({
        message: "create a course"
    })
})

module.exports = {
    adminRouter: adminRouter
};
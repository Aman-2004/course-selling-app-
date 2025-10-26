const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const ObjectID=Schema.Types.ObjectID;

const userSchema= new Schema({// lets you structure your table
    email: {type:String,unique:true},
    password: String,
    firstName: String,
    lastName:String
});
const adminSchema= new Schema({
    email: {type:String,unique:true},
    password: String,
    firstName: String,
    lastName:String
});
const courseSchema= new Schema({
    title:String,
    description:String,
    price:Number,
    imageURL: String,
    creatorID:{type:ObjectID,ref:'admin'}
});
const purchaseSchema= new Schema({
    courseID:{type:ObjectID,ref:'admin'},// references in mongoose
    userID:{type:ObjectID,ref:'user'}
});

const userModel=mongoose.model("user",userSchema);// lets you puts something in a model
const adminModel=mongoose.model("admin",adminSchema);
const courseModel=mongoose.model("course",courseSchema);
const purchaseModel=mongoose.model("purchase",purchaseSchema);

module.exports={
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}
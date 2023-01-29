import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        reuired:true,
        min:2,
        max:50,
    },
    lastName:{
        type:String,
        reuired:true,
        min:2,
        max:50,
    },
    email:{
        type:String,
        reuired:true,
        unique:true,
        max:50,
    },
    password:{
        type:String,
        reuired:true,
        min:5,
        max:50,
    },
    picturePath:{
        type:String,
        default:"",
        required:false
    },
    friends:{
        type:Array,
        default:[]
    },
    location:String,
    occupation:String,
    viewedProfile:Number,
    impressions:Number
},
    {timestamps:true}
);

const User = mongoose.model("User",UserSchema)

export default User;
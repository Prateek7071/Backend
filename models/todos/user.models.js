import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  // {
  //   username: String,
  //   emaiil: String,
  //   isActive: Boolean
  // }
  //professional way:
  {
    username:{
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    email:{
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password:{
      type:String,
      required: [true,"Password is required"],
      
    }
  },
  {timestamps: true} //tells createdat and updatedat, is a feature of mongoose
)

//export const User = mongoose.model("kya","kiske bais pe")
// mongodb will convert "Kya" to kyas (lowercase evrything and plural )

export const user = mongoose.model("User",userSchema)
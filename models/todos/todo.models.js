import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  complete:{
    type: Boolean,
    default: false,
  },
  createdBy:{
    type: mongoose.Schema.Types.ObjectId, //when writing this it mean it expects a reference, and in the next line pass a reference
    ref: "User" //same name as kya
  },
  subTodos:[ // this is written as type: []
    {
      type:mongoose.Schema.Types.ObjectId,
      ref: "SubTodo"
    }
  ] // this is array of subtodos
},{timestamps:true})

export const Todo = mongoose.model("Todo",todoSchema)
// when this gets stored in mongoDb its name will be todos
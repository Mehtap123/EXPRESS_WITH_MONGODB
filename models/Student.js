import mongoose from "mongoose";
const { Schema, model } = mongoose;

const studentSchema = new Schema({
  name: String,
  first_name: String,
  email: String,
});

export default model("Student", studentSchema);
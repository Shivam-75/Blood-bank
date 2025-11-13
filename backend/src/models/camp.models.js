import { model, Schema, } from "mongoose";

const campSchema = new Schema({
  location: {
    type: String,
    require: true,
    trim: true,
    lowercase: true
  },
  date: {
    type: String,
    return: true,
    trim: true,
  },
  time: {
    type: String,
    require: true,
    trim: true,
    lowercase: true
  },
  contact: {
    type: Number,
    require: true,
  },
  organized: {
    type: String,
    require: true,
    trim: true,
    lowercase: true
  }
}, { timestamps: true });

export const Camp = model("Camp", campSchema);
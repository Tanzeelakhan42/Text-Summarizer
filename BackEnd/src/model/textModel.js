import mongoose from "mongoose";

const textSchema = new mongoose.Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  summary: { type: String, required: true },
});

const textModel = mongoose.model("text", textSchema);
export default textModel;

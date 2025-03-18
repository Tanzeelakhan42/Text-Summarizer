import express from "express";
import { saveText } from "../controller/textController.js";

const router = express.Router();
router.post("/save", saveText);
export default router;

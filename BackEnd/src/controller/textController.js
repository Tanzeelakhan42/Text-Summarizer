import textModel from "../model/textModel.js";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

let openApiKey = process.env.OPEN_API_KEY;

export const saveText = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || typeof text !== "string") {
      return res
        .status(400)
        .json({ error: "Invalid input. Please provide text." });
    }
    let summary = await summarizeText(text);
    console.log("Summarized", summary);

    const newText = new textModel({ content: text, summary: summary });
    await newText.save();

    res.status(201).json({
      message: "Text saved successfully!",
      data: { content: newText, summary: summary },
    });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

const openai = new OpenAI({
  apiKey: openApiKey, // Store API key in environment variable
});

async function summarizeText(text) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Use GPT-4-Turbo or GPT-3.5-Turbo
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that summarizes text.",
        },
        { role: "user", content: `Summarize this: ${text}` },
      ],
      max_tokens: 100, // Adjust for shorter/longer summaries
    });

    console.log("Summary:", response.choices[0].message.content);
    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error:", error);
  }
}

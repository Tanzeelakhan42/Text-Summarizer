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
  apiKey: openApiKey,
});

async function summarizeText(text) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a professional news summarizer. Summarize the key points of the following article in a clear, concise, and neutral tone, retaining the main arguments and context.",
        },
        {
          role: "user",
          content: `Summarize this article in 3-4 sentences:\n\n${text}`,
        },
      ],
      max_tokens: 150,
      temperature: 0.5,
    });

    console.log("Summary:", response.choices[0].message.content);
    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error:", error);
  }
}

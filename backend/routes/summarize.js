
import express from "express";
import fetch from "node-fetch";
const router = express.Router();

router.post("/", async (req, res) => {
  const { transcript, prompt } = req.body;

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + process.env.GEMINI_API_KEY,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${prompt}\n\nTranscript:\n${transcript}`
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    if (data.error) {
      console.error("Gemini API Error:", data.error);
      return res.status(500).json({ error: data.error.message });
    }

    // Gemini returns text inside candidates[0].content.parts[0].text
    const summary =
      data.candidates?.[0]?.content?.parts?.[0]?.text || "No summary generated";

    res.json({ summary });
  } catch (error) {
    console.error("Request Error:", error);
    res.status(500).json({ error: "Error generating summary" });
  }
});

export default router;

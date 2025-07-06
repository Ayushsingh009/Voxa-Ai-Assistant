import { GoogleGenerativeAI } from "@google/generative-ai";

// Load API key from .env (must start with VITE_)
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
console.log("✅ API KEY loaded:", apiKey);

const genAI = new GoogleGenerativeAI(apiKey);

async function main(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }]
        }
      ],
      generationConfig: {
    maxOutputTokens:20, 
    temperature: 0.9,   
    topP: 0.8,  
    topK: 36,
    responseMimeType:"text/plain",       
  }
    });

    // ✅ Safely get the plain text from Gemini
    const text = result.response.text();
    console.log("✅ Gemini replied:", text);
    return text;

  } catch (error) {
    console.error("❌ AI response error:", error);
    return "⚠️ Gemini AI failed to respond.";
  }
}

export default main;


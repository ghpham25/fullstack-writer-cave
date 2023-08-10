const axios = require("axios");

// Function to generate a writing prompt using the OpenAI API
async function generateWritingPrompt() {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    const client = axios.create({
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    const params = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: "Give me a short and creative writing prompt",
        },
      ],
      temperature: 0.5,
    };

    const response = await client.post(
      "https://api.openai.com/v1/chat/completions",
      params
    );
    const generatedPrompt = response.data["choices"][0]["message"]["content"];
    return generatedPrompt;
  } catch (error) {
    console.log("Error generating prompt:", error);
    throw error;
  }
}

module.exports = {
  generateWritingPrompt,
};

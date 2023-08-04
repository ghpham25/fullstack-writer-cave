require("dotenv").config();
const axios = require("axios")

const prompt = "Give me a short writing prompt on a creative topic";
const apiKey = process.env.OPENAI_API_KEY;
const client = axios.create({
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

const params = {
//   prompt: "Give me a short writing prompt on a creative topic",
  model: "gpt-3.5-turbo",
  messages: [{"role": "user", "content": "Give me a short writing prompt"}],
  temperature: 0
};

client
  .post("https://api.openai.com/v1/chat/completions", params)
  .then((response) => {
    // console.log(response)
    console.log(response.data['choices'][0]['message']['content']);
  })
  .catch((err) => {
    console.log("error:", err);
  });

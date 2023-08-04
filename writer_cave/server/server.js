const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
require("dotenv").config();
const axios = require('axios'); // Use require for importing modules

// Use a different route name like "/api/writing-prompt"
app.get('/api/writing-prompt', async (req, res) => {
  // const prompt = "Give me a short writing prompt on a creative topic"
  const apiKey = process.env.OPENAI_API_KEY
  const client = axios.create({
    headers:{
      Authorization: `Bearer ${apiKey}`,
    }
  })

  const params = {
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": "Give me a short and creative short writing prompt"}],
    temperature: 0.5
  }

  // try {

  //   const response = await client.post("https://api.openai.com/v1/chat/completions", params)
  
  //   const generatedPrompt = response.data['choices'][0]['message']['content']
  
  //   res.json({prompt: generatedPrompt})

  // } catch (error) {
  //   console.error("Error generating prompt: ", error)
  // }

  client
  .post("https://api.openai.com/v1/chat/completions", params)
  .then((response) => {
    // console.log(response)
    // console.log(response.data['choices'][0]['message']['content']);
    const generatedPrompt = response.data['choices'][0]['message']['content']
    res.json({generatedPrompt})
  })
  .catch((err) => {
    console.log("error:", err);
  });

  // //example prompt for simplicity
  // const prompt = 'This is a prompt fetched from the backend';
  // res.json({prompt});
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const axios = require('axios'); // Use require for importing modules

app.use(cors());
require("dotenv").config();

/* Connect to MongoDB database */
const MongoDBpassword = process.env.MONGODB_PASSWORD
const uri = `mongodb+srv://giangpham:mypassword@cluster0.v0bfe8j.mongodb.net/?retryWrites=true&w=majority`;

async function connect() {
  try {
    await mongoose.connect(uri)
    console.log("Connected to MongoDB")
  } catch(error) {
    console.log("Error connecting to MongoDB: ", error)
  }
}

connect()

/* Connect to OpenAI API */ 
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

  client
  .post("https://api.openai.com/v1/chat/completions", params)
  .then((response) => {
    const generatedPrompt = response.data['choices'][0]['message']['content']
    res.json({generatedPrompt})
  })
  .catch((err) => {
    console.log("Error generating prompt:", err);
  });
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});

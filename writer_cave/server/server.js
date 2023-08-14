const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const axios = require('axios'); // Use require for importing modules
const { generateWritingPrompt } = require('./openai'); // Import the generateWritingPrompt function
const {insertPromptAnswer} = require('./database')
app.use(cors());
require("dotenv").config();
app.use(express.json());


/* Connect to MongoDB database */
const MongoDBpassword = process.env.MONGODB_PASSWORD
// const uri = `mongodb+srv://giangpham:mypassword@cluster0.v0bfe8j.mongodb.net/?retryWrites=true&w=majority`;
const uri = `mongodb+srv://giangpham:${MongoDBpassword}@cluster0.v0bfe8j.mongodb.net/homepage?retryWrites=true&w=majority`;

/* Connecting to mongoDB homepage database  */
async function connect() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("Connected to MongoDB")
  } catch(error) {
    console.log("Error connecting to MongoDB: ", error)
  }
}
connect()

/* Route to insert a new prompt-answer pair into the "prompt_answer" collection */
app.post('/api/submit-prompt-answer', async(req, res) => {
  try {
    const {prompt, answer} = req.body;
    console.log('Received prompt:', prompt);
    console.log('Received answer:', answer);
    const promptAnswer = await insertPromptAnswer(prompt, answer)
    res.json({promptAnswer})
  } catch(error) {
    res.json({error: "Error submitting prompt and answer"})
  }
})

// Route to generate a writing prompt using the OpenAI API
app.get('/api/writing-prompt', async (req, res) => {
  try {
    const generatedPrompt = await generateWritingPrompt();
    res.json({ generatedPrompt });
  } catch (error) {
    res.status(500).json({ error: 'Error generating prompt' });
  }
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
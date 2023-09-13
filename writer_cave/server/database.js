const mongoose = require("mongoose")
const {Schema} = mongoose

//Define schema for "prompt_answer" collection 
const promptAnswerSchema = new Schema ({
    prompt: String, 
    answer: String, 
    createdAt : {type: Date, default: Date.now}
})

//Create a model based on the Schema 
const PromptAnswer = mongoose.model("PromptAnswer", promptAnswerSchema, "prompt_response")

//Insert a new prompt-answer pair in the prompt_answer collection
async function insertPromptAnswer(prompt, answer) {
    try {
        const promptanswer = new PromptAnswer({prompt, answer});
        // const promptanswer = new PromptAnswer({prompt: "trial", answer: "trial"})
        await promptanswer.save();
        return promptanswer;
    } catch (error) {
        console.error("Error inserting prompt answer: ", error)
    }
}

async function fetchAllPromptAnswers() {
    try {
        const fetched = await PromptAnswer.find()
        return fetched
    } catch (error) {
        console.error("Error fetching all prompt answers: ", error)
    }
}

async function deletePromptAnswer(id) {
    try {
        await PromptAnswer.findByIdAndDelete(id)
    }catch (error) {
        console.error('Error deleting prompt: ', error);
      }
}

module.exports = {
    insertPromptAnswer,
    fetchAllPromptAnswers,
    deletePromptAnswer,
    PromptAnswer,
}
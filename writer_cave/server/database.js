const mongoose = require("mongoose")
const {Schema} = mongoose

//Define schema for "prompt_answer" collection 
const promptAnswerSchema = new Schema ({
    prompt: String, 
    answer: String, 
    createdAt : {type: Date, default: Date.now}
})

//Create a model based on the Schema 
const PromptAnswer = mongoose.model("PromptAnswer", promptAnswerSchema, "prompt_answer")

//Insert a new prompt-answer pair in the prompt_answer collection
async function insertPromptAnswer(prompt, answer) {
    try {
        const PromptAnswer = new PromptAnswer({prompt, answer});
        await PromptAnswer.save();
        return PromptAnswer;
    } catch (error) {
        console.error("Error inserting prompt answer: ", error)
    }
}

module.exports = {
    insertPromptAnswer,
}
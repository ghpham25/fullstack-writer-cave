const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

//pseudo code
const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  //    writings: PromptAnswer
});

const User = new mongoose.model("User", UserSchema, "users");
//Insert a new prompt-answer pair in the prompt_answer collection

saltRounds = 10;

async function insertUserData(firstName, lastName, email, password) {
  try {
    // Hash the password
    const hash = await bcrypt.hash(password, saltRounds);

    // Create a new user instance
    const newUser = new User({ firstName, lastName, email, password: hash });

    // Save the user to the database
    await newUser.save();

    // User registered successfully
    return { success: true, message: "User registered successfully" };
  } catch (error) {
    // Handle errors
    return { success: false, error: error.message };
  }
}

async function verifyUserData(email, password) { 
    retrivedUser = await User.findOne({ email: email }, (err, user) => {
        if (err) {
          // Handle error
          return res.status(500).json({ error: 'User retrieval error' });
        }
      
        if (!user) {
          // No user found with the provided email
          return res.status(401).json({ error: 'Invalid credentials' });
        }
      
        // User found, now compare passwords
        // (Use bcrypt.compare as shown in the previous response)
      });
      
      bcrypt.compare(password, retrievedUser.password, (err, isMatch) => {
        if (err) {
          // Handle error
          return res.status(500).json({ error: 'Password comparison error' });
        }
      
        if (!isMatch) {
          // Passwords do not match
          return res.status(401).json({ error: 'Invalid credentials' });
        }
        // Passwords match, user is authenticated
        // Generate and send an authentication token, as mentioned in the previous response.
      });
      }

// //pseudo code
// async function retreiveUserByEmail(email) {
//     try {
//         return User.find(email = email)
//     }
// }

module.exports = {
  insertUserData,
  verifyUserData,
};

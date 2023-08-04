import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Header() {
  //setting Prompt
  const [textPrompt, setPrompt] = useState("");
  useEffect(() => {
    axios.get("http://localhost:5000/api/writing-prompt")
    .then(response => {
      setPrompt(response.data.generatedPrompt)
    })
    .catch(error => {
      console.error("Error fetching prompt: ", error)
    })
  }, [])


  //showing Prompt
  const [isPromptRevealed, setIsPromptRevealed] = useState(false);
  const showPrompt = () => {
    // display the Prompt
    // let newPrompt = "This is an example prompt";
    // setText(newPrompt);
    setIsPromptRevealed(true);
  };

  const [isTextSubmitted, setIsTextSubmitted] = useState(false);

  //need to change to disableText, save the Text in a separate file,
  //and show text like "Thank you for filling today's prompt, come back
  //tomorrow for more prompt"

  const disableText = () => {
    setIsTextSubmitted(true);
  };
  return (
    <>
      {/* <p> {textPromptback} </p> */}
      <div className="font-loader">
        {/* Question */}
        {!isPromptRevealed && (
          <div id="question" className="flex mt-2">
            <label
              htmlFor="revealButtons"
              className="ml-5 py-2 px-2 text-white font-bold text-lg"
            >
              {" "}
              Reveal the Prompt?{" "}
            </label>

            {/* Yes-No Buttons */}

            <div id="revealButtons" className="">
              <button
                onClick={showPrompt}
                className="bg-blue-500 focus:bg-blue-800 border-none text-white on-clv hover:bg-blue-800 reveal w-10 py-2 px-2 rounded-lg mr-2"
              >
                {" "}
                Yes
              </button>
              <span className="text-white">/</span>
              <button className=" bg-blue-500 focus:bg-blue-800 border-none text-white hover:bg-blue-800 reveal w-10 py-2 px-2 rounded-lg ml-2">
                {" "}
                No{" "}
              </button>
            </div>
          </div>
        )}

        {/*Text prompt and text box for answering */}
        <div id="answer">
          {isPromptRevealed && !isTextSubmitted && (
            <div id="prompt" className="block ml-5 mt-2">
              <span className="text-white"> {textPrompt} </span>
            </div>
          )}

          {isPromptRevealed && !isTextSubmitted && (
            <div className="relative mb-3 ml-3 mr-2" data-te-input-wrapper-init>
              <textarea
                id="message"
                rows="4"
                className="h-80 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
                disabled={isTextSubmitted}
              ></textarea>
            </div>
          )}

          {isPromptRevealed && !isTextSubmitted && (
            <div className="text-right mr-3">
              {" "}
              <button
                onClick={disableText}
                className="px-2 py-2 bg- bg-blue-800  hover:bg-blue-950 text-white rounded-xl"
              >
                {" "}
                Save and stop editting{" "}
              </button>{" "}
            </div>
          )}

          {isTextSubmitted && (
            <h2 className=" flex justify-center wrap text-white text-center font-bold text-3xl mt-10">
              {" "}
              Thanks for sharing your thoughts today! Come back tomorrow for
              more prompts ~
            </h2>
          )}
        </div>
      </div>
    </>
  );
}

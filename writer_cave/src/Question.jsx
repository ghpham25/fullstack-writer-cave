import React, { useState } from "react";

export default function Header() {
  let textPrompt = "This is an example prompt";

  const [isPromptRevealed, setIsPromptRevealed] = useState(false);
  const showPrompt = () => {
    // display the Prompt
    // let newPrompt = "This is an example prompt";
    // setText(newPrompt);
    setIsPromptRevealed(true);
  };

  return (
    <>
      <div className="font-loader">
        {/* Question */}
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

        {/*Text prompt and text box for answering */}
        <div id="answer">
          {isPromptRevealed && (
            <div id="prompt" className="block ml-5 mt-5">
              <span className="text-white"> {textPrompt} </span>
            </div>
          )}
          {isPromptRevealed && (
            <div class="relative mb-3 ml-3 mr-2" data-te-input-wrapper-init>
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

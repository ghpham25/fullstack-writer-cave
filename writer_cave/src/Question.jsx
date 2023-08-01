import React, { useState } from "react";

export default function Header() {

  // let textPrompt = "This is an example prompt"
  
  const [textPrompt, setText] = useState("")
  const showPrompt = () => {
    // display the Prompt
    let newPrompt = "This is an example prompt"
    setText(newPrompt)
  };

  const textBox = ""

  return (
    <>
      <div className="font-loader">
        {/* Question */}
        <div className="flex">
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
        <div id = "answer">
          <div id="prompt" className="block ml-5 mt-5">
            <span className  ="text-white"> {textPrompt} </span>
          </div>

      <div class="relative mb-3" data-te-input-wrapper-init>
        <textarea
          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id="exampleFormControlTextarea1"
          rows="4"
          ></textarea>
      </div>

        </div>

      </div>
    </>
  );
}

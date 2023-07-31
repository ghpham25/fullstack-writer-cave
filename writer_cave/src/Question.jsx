import React, { useEffect } from "react";
import WebFont from "webfontloader";

export default function Header() {

  return (
    <>
      <div className="font-loader">
    {/* Question */}
    <div className = "flex">
        <label htmlFor="revealButtons" className="ml-5"> Reveal the Prompt? </label>
        <div id = "revealButtons">
          <button className = "bg-blue-500 hover:bg-blue-800  reveal ml-10 w-10 rounded-[15px]"> Yes</button>
          <button className = " bg-blue-500 hover:bg-blue-800 reveal ml-10 w-10  rounded-[15px]"> No </button>
        </div>
    </div>

    </div>
    </>
  );
}

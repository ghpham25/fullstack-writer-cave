import React, { useState } from "react";

export default function AnswerCard({ prompt, answer, onDelete }) {
  const [expanded, setExpanded] = useState(false);

  const expandCard = () => {
    setExpanded(true);
    console.log("expanded")
  };

  const closeExpandedCard = () => {
    setExpanded(false);
    console.log("closed")

  };

  return (
    <div>
      {!expanded && (
        <div
          className={`h-60 bg-slate-100 border border-slate-300 grid grid-col-2 p-4 gap-4 rounded-lg shadow-md ${
            expanded ? "expanded" : ""
          }`}
        >
          <div className="col-span-2 text-lg font-bold font-loader capitalize rounded-md">
            {prompt}
            <div className="col-span-1 flex items-end font-bold font-loader">
              <button
                onClick= {onDelete}
                className="rounded-md bg-slate-300 hover:bg-slate-600 hover:text-slate-200 duration-300 p-2"
              >
                Delete Card
              </button>

              <button 
                onClick={expandCard}
                className="rounded-md bg-slate-300 hover:bg-slate-600 hover:text-slate-200 duration-300 p-2"
              >
                Open Card
              </button>

            </div>
          </div>
          {/* <div className="col-span-2 rounded-md flex items-end"> {answer} </div> */}
        </div>
      )}

      {expanded && (
        <div>
          <div className="col-span-2 text-lg font-bold font-loader capitalize rounded-md">
            {prompt}
          </div>
          <p className="card-answer">{answer}</p>
          <button className="close-button" onClick={closeExpandedCard}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

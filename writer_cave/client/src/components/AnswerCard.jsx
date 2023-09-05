import React, { useState } from "react";

export default function AnswerCard({ prompt, answer, onDelete }) {
  const [expanded, setExpanded] = useState(false);

  const expandCard = () => {
    setExpanded(true);
  };

  const closeExpandedCard = () => {
    setExpanded(false);
  };

  return (
    <div className = "font-loader">
      {!expanded && (
        <div
          className="not-expanded h-60 bg-slate-100 border border-slate-300 grid grid-col-2 p-4 gap-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105
          "
          onClick={expandCard}
          style={{ cursor: 'pointer' }} 
        >
          <div className="col-span-2 text-lg capitalize rounded-md">
            {prompt}
          </div>
          <div className="flex items-end">
            <button
              onClick={onDelete}
              className="button-mw delete-button "
            >
              Delete
            </button>
          </div>
        </div>
      )}

      {expanded && (
        <div className="expanded transition-all duration-300 flex flex-col">
          <div className="text-lg capitalize rounded-md ">
            {prompt}
          </div>
          <div className="card-answer"> {answer}</div>
          <div className="flex-grow"></div> 
          <div className="flex items-end">
            <button
              className="button-mw close-button"
              onClick={closeExpandedCard}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

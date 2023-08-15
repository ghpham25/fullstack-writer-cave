import React from "react";

export default function AnswerCard({ prompt, answer }) {
  return (
    <div>
      <div className="w-60 bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
        <div className="col-span-2 text-lg font-bold capitalize rounded-md">
          {prompt}
        </div>
        <div className="col-span-2 rounded-md"> {answer} </div>
        <div className="col-span-1">
          <button className="rounded-md bg-slate-300 hover:bg-slate-600 hover:text-slate-200 duration-300 p-2">
            Delete Card
          </button>
        </div>
      </div>
    </div>
  );
}

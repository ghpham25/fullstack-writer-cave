import React from "react";

export default function Test4() {
  return (
    <div>
      <label
        htmlFor="OrderNotes"
        className="block text-sm font-medium text-gray-700"
      >
        Order notes
      </label>

      <textarea
        id="OrderNotes"
        className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
        rows="4"
        placeholder="Enter any additional order notes..."
      ></textarea>
    </div>
  );
}
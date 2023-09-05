import React, { useState, useEffect } from "react";
import AnswerCard from "../components/AnswerCard";
import axios from "axios";

export default function MyWriting() {
  const [data, setData] = useState([]);

  const handleDelete = (dataId) => {
    // Make a DELETE request to backend API
    axios
      .delete(`http://localhost:5000/api/saved-prompt-answers/${dataId}`)
      .then(() => {
        // After successful deletion, update the prompts in the state
        const updatedData = data.filter((data) => data._id !== dataId);
        setData(updatedData);
      })
      .catch((error) => {
        console.error("Error deleting data: ", error);
      });
  };

  useEffect(() => {
    // Fetch saved data from your backend API
    axios
      .get("http://localhost:5000/api/saved-prompt-answers")
      .then((response) => {
        setData(response.data.fetchedPromptAnswers.reverse()); // Assuming the data is an array of objects
      })
      .catch((error) => {
        console.error("Error fetching saved data: ", error);
      });
  }, []);

  return (
    <>
      <div className="container grid grid-cols-5 gap-4 justify-center">
        {data.map((item) => (
          <div
            key={item._id}
            className="flex w-60 p-2"
          >
            <AnswerCard
              prompt={item.prompt}
              answer={item.answer}
              onDelete={() => handleDelete(item._id)}
            />
          </div>
        ))}
      </div>
    </>
  );
}

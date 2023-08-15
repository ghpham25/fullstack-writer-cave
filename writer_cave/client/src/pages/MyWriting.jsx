import React, { useState, useEffect } from "react";
import AnswerCard from "../components/AnswerCard";
import axios from 'axios';

export default function MyWriting() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Fetch saved data from your backend API
    axios
      .get("http://localhost:5000/api/saved-prompt-answers")
      .then((response) => {
        setData(response.data.fetchedPromptAnswers); // Assuming the data is an array of objects
        console.log(response.data.fetchedPromptAnswers)
      })
      .catch((error) => {
        console.error("Error fetching saved data: ", error);
      });
  }, []);

  return (
    <>
      <AnswerCard key="" prompt="trial" answer="alo">
        {" "}
      </AnswerCard>
    </>
  );
}

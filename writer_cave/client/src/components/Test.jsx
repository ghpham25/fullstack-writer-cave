import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Test() {
  const [textPromptback, setPromptback] = useState("hello");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api")
      .then((response) => {
        setPromptback(response.data.prompt);
      })
      .catch((error) => {
        console.error("Error fetching prompt:", error);
      });
  }, []);

  return <div>{textPromptback}</div>;
}

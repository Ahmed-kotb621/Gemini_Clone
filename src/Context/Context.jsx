import { createContext, useState } from "react";
import runChat from "../services/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState("");

  const addPrompt = (prompt) => {
    setPrevPrompt((prev) => [...prev, prompt]);
  };

  const onSent = async (prompt) => {
    setResult("");
    setIsLoading(true);
    setShowResult(true);
    setRecentPrompt(input);
    let response;

    // handle response from input field or prev. prompt
    if (prompt !== undefined) {
      response = await runChat(prompt);
    } else {
      response = await runChat(input);
    }

    let splitedResonse = response.split("**");
    let newResponse = "";

    // displaying titles as bold text
    for (let i = 0; i < splitedResonse.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += splitedResonse[i];
      } else {
        newResponse += "<b>" + splitedResonse[i] + "</b>";
      }
    }

    // break new line after each definition
    let breakedResponse = newResponse.split("*").join("</br>");

    let typingResponse = breakedResponse.split(" ");
    let delay = "";

    // adding delay on displaying response (typing effect)
    for (let i = 0; i < typingResponse.length; i++) {
      setTimeout(() => {
        delay += typingResponse[i] + " ";
        setResult(delay);
      }, 75 * i);
    }

    // adding new prompt to prev. promptss
    input === "" ? null : addPrompt(input);
    setIsLoading(false);
    setInput("");
  };

  const contextValues = {
    onSent,
    input,
    setInput,
    isLoading,
    recentPrompt,
    setRecentPrompt,
    prevPrompt,
    result,
    showResult,
    setShowResult,
  };
  return (
    <Context.Provider value={contextValues}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;

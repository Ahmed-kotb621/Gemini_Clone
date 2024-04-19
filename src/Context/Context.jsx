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

  const addPrompt = (promt) => {
    setPrevPrompt((prev) => [...prev, promt]);
  };

  const onSent = async () => {
    setResult("");
    setIsLoading(true);
    setShowResult(true);
    setRecentPrompt(input);
    const response = await runChat(input);

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
    let del = "";

    // adding delay on displaying response (typing effect)
    for (let i = 0; i < typingResponse.length; i++) {
      setTimeout(() => {
        del += typingResponse[i] + " ";
        setResult(del);
      }, 75 * i);
    }

    // adding new prompt to prev. prompts
    addPrompt(input);
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

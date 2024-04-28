import { useContext, useState } from "react";
import Header from "../Header/Header";
import Caution from "./Caution";
import Greeting from "./Greeting";
import Search from "./Search";
import Suggestions from "./Suggestions";
import Result from "../Result/Result";
import { Context } from "../../Context/Context";
import "./main.scss";
import { ThemeContext } from "../../Context/ThemeContext";
function Mainn() {
  const { showResult } = useContext(Context);
  const { isDark } = useContext(ThemeContext);

  return (
    <main className={`${isDark ? "mainn-dark" : "mainn"}`}>
      <Header />
      <div className={`${isDark ? "main-container-dark" : "main-container"}`}>
        {!showResult ? (
          <>
            <Greeting />
            <Suggestions />
          </>
        ) : (
          <Result />
        )}

        <Search />
        <Caution />
      </div>
    </main>
  );
}

export default Mainn;

import { useContext, useState } from "react";
import Header from "../Header/Header";
import Caution from "./Caution";
import Greeting from "./Greeting";
import Search from "./Search";
import Suggestions from "./Suggestions";
import Result from "../Result/Result";
import { Context } from "../../Context/Context";
import "./Mainn.css";
function Mainn() {
  const { showResult } = useContext(Context);

  return (
    <main className="mainn">
      <Header />
      <div className="main-container">
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

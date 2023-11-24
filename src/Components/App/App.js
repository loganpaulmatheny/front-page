import "./App.css";
import { getArticles } from "../../apiCalls";

import { Routes, Route } from "react-router-dom";
// import { mockData } from "../../Data/mockData";
import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Home from "../Home/Home";
import Viewer from "../Viewer/Viewer";

function App() {
  const [articles, setArticles] = useState([]);

  function removeTrailingChars(property) {
    return property.replace(/\s*\[\+\d+\s*chars\]\s*$/, "");
  }

  function getArticlesCall() {
    getArticles().then((data) => {
      const updatedData = data.articles.map((article) => {
        article.id = uuidv4();
        if (article.content) {
          article.content = removeTrailingChars(article.content);
        }
        return article;
      });

      setArticles(updatedData);
    });
  }

  useEffect(() => {
    getArticlesCall();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home articles={articles} />}></Route>
        <Route
          path="/article/:id"
          element={<Viewer articles={articles} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;

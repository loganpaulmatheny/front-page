import "./App.css";
import { getArticles } from "../../apiCalls";

import { Routes, Route } from "react-router-dom";
// import { mockData } from "../../Data/mockData";
import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Home from "../Home/Home";
import Viewer from "../Viewer/Viewer";
import Error from "../Error/Error";

function App() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");

  function removeTrailingChars(property) {
    return property.replace(/\s*\[\+\d+\s*chars\]\s*$/, "");
  }

  function getArticlesCall() {
    getArticles()
      .then((data) => {
        const updatedData = data.articles.map((article) => {
          article.id = uuidv4();
          if (article.content) {
            article.content = removeTrailingChars(article.content);
          }
          return article;
        });

        setArticles(updatedData);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message);
        if (error.message === "500") {
          setError("Looks like the newsroom is down, try again later!");
        } else {
          setError(
            "We're not sure what happened with our reporting, we'll be back after a commercial break!!"
          );
        }
      });
  }

  useEffect(() => {
    getArticlesCall();
  }, []);

  return (
    <>
      <Routes>
        {error ? (
          <Route path="/" element={<Error error={error} />}></Route>
        ) : (
          <Route path="/" element={<Home articles={articles} />}></Route>
        )}
        <Route
          path="/article/:id"
          element={<Viewer articles={articles} />}
        ></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;

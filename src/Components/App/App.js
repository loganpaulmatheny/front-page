import "./App.css";
// import { getArticles } from "../../apiCalls";
import { Routes, Route } from "react-router-dom";
import { mockData } from "../../Data/mockData";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [articles, setArticles] = useState({});

  function getArticlesCall() {
    // getArticles().then((data) => {
    //   setArticles(data.articles);
    // });

    setArticles(mockData);
  }

  useEffect(() => {
    getArticlesCall();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home articles={articles} />}></Route>
        {/* <Route path="/view" element={<View article={article} />}></Route> */}
      </Routes>
    </>
  );
}

export default App;

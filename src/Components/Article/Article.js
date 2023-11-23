import "./Article.css";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Article({ article }) {
  const navigate = useNavigate();
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // This will force a reload of home page and then immediately route to the blowup page!
  // The beforeunload event is just before you leave a page
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const isReloading = event.type === "beforeunload";
      if (isReloading && !isInitialLoad) {
        console.log("redirect occured");
        navigate("/");
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    setIsInitialLoad(false);

    // Cleanup function, prevent a memory link
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [navigate]);

  return (
    <article className="article">
      <h1>{article.title}</h1>
      <p>{article.author}</p>
      <p>{article.publishedAt}</p>
      <p>{article.source.name}</p>
      <p>{article.content}</p>
    </article>
  );
}

export default Article;

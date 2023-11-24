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
      <h1 className="title">{article.title}</h1>
      <div className="info-block">
        <img
          className="image"
          src={`${article.urlToImage}`}
          alt={`${article.title}`}
        />
        <div className="author-block">
          <p className="author">{article.author}</p>
          <p className="publishedAt">{article.publishedAt}</p>
          <p>{article.source.name}</p>
        </div>
      </div>
      <div className="content-block">
        <p className="content">{article.content}</p>
        <a className="article-link" href={`${article.url}`}>
          to read the full article click here
        </a>
      </div>
    </article>
  );
}

export default Article;

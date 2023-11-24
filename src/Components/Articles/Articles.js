import "./Articles.css";
import React, { useState, useEffect } from "react";
import Card from "../Card/Card";

function Articles({ articles }) {
  const [sortedArticles, setSortedArticles] = useState(articles);

  useEffect(() => {
    setSortedArticles([...articles]);
  }, [articles]);

  const sortArticles = (articlesToSort, status) => {
    const sorted = [...articlesToSort];

    if (status) {
      sorted.sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt));
    } else {
      sorted.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    }

    setSortedArticles(sorted);
  };

  const articleCards = sortedArticles.map((article) => {
    return (
      <Card
        id={article.id}
        key={article.id}
        title={article.title}
        description={article.description}
        urlToImage={article.urlToImage}
        date={article.publishedAt}
      />
    );
  });

  return (
    <>
      {articles.length === 0 && <div>Loading...</div>}
      {articles.length > 0 && (
        <div className="articles-page">
          <h1 className="app-title">front page</h1>
          <div className="sort">
            <p
              className="sort-option"
              onClick={() => sortArticles(articles, true)}
            >
              sort by earliest
            </p>
            <p
              className="sort-option"
              onClick={() => sortArticles(articles, false)}
            >
              sort by latest
            </p>
          </div>
          <section className="articles-container">{articleCards}</section>
        </div>
      )}
    </>
  );
}

export default Articles;

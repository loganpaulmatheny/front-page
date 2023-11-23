import "./Articles.css";
import React from "react";
import Card from "../Card/Card";

function Articles({ articles }) {
  console.log(articles);
  const articleCards = articles.map((article) => {
    return (
      <Card
        id={article.id}
        key={article.id}
        title={article.title}
        description={article.description}
      />
    );
  });

  return (
    <div className="articles-page">
      <h1 className="app-title">front page</h1>
      <section className="articles-container">
        {articleCards}
      </section>
    </div>
  );
}

export default Articles;

import "./Page.css";
import React from "react";
import Card from "../Card/Card";

function Page({ articles }) {
  console.log(articles);
  const articleCards = articles.map((article) => {
    return (
      <Card
        id={article.publishedAt}
        key={article.publishedAt}
        title={article.title}
      />
    );
  });

  return <div className="articles-container">{articleCards}</div>;
}

export default Page;

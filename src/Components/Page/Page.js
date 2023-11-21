import React from "react";

function Page({ articles }) {
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

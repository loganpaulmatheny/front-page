import React from "react";

function Article({ article }) {
  return (
    <div>
      <article className="park-info">
        <div className="title">
          <h1>{article.title}</h1>
          <p>article.description</p>
        </div>
      </article>
    </div>
  );
}

export default Article;

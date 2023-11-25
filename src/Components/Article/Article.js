import "./Article.css";

function Article({ article }) {
  // Destructure properties with default values to avoid undefined errors
  const {
    title = "",
    urlToImage = "",
    author = "",
    publishedAt = "",
    source = { name: "" },
    content = "",
    url = "",
  } = article;
  return (
    <article className="article">
      <h1 className="title">{title}</h1>
      <div className="info-block">
        <img className="image" src={`${urlToImage}`} alt={`${title}`} />
        <div className="author-block">
          <p className="author">{author}</p>
          <p className="publishedAt">{publishedAt}</p>
          <p className="source">{source.name}</p>
        </div>
      </div>
      <div className="content-block">
        <p className="content">{content}</p>
        <a className="article-link" href={`${url}`}>
          to read the full article click here
        </a>
      </div>
    </article>
  );
}

export default Article;

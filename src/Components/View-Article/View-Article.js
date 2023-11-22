function View({ articles }) {
  const id = useParams().id;
  const articleToView = articles.filter((articleData) => {
    if (article.id === id) {
      return articleData;
    }
  });

  return <Article article={articleToView[0]} />;
}

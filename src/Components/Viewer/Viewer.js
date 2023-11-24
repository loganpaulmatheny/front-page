import Article from "../Article/Article";
import { useParams } from "react-router-dom";

function View({ articles }) {
  const id = useParams().id;
  const articleToView = articles.filter((articleData) => {
    if (articleData.id === id) {
      return articleData;
    }
  });

  return <Article article={articleToView[0]} />;
}

export default View;

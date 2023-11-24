import Article from "../Article/Article";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function View({ articles }) {
  const [articleToView, setArticleToView] = useState({});
  const id = useParams().id;

  const navigate = useNavigate();

  useEffect(() => {
    // Filter the articles when the component mounts or when the articles prop changes
    const filteredArticle = articles.find(
      (articleData) => articleData.id === id
    );

    // Check if filteredArticle is truthy before setting the state
    if (filteredArticle) {
      setArticleToView(filteredArticle);
    } else {
      // If articleToView is not truthy, redirect to the home page
      navigate("/");
    }
  }, [articles, id, navigate]);

  return <Article article={articleToView} />;
}

export default View;

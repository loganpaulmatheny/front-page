import React from "react";
import Articles from "../Articles/Articles";

function Home({ articles }) {
  return (
    <div className="home-container">
      <Articles articles={articles} />
    </div>
  );
}

export default Home;

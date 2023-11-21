import React from "react";
import Page from "../Page/Page";

function Home({ articles }) {
  return (
    <div className="home-container">
      <Page articles={articles} />
    </div>
  );
}

export default Home;

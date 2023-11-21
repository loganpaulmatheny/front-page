import React from "react";

function Home({articles}) {
  return (
    <div className="home-container">
      <Page articles={articles} />
    </div>
  );
}

export default Home;

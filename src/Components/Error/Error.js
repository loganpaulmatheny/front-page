import "./Error.css";
import React from "react";

function Error({ error }) {
  return (
    <div>
      {!error ? (
        <div className="error">
          We couldn't quite hear you there, try checking your URL!
        </div>
      ) : (
        <div className="error">{error}</div>
      )}
    </div>
  );
}

export default Error;

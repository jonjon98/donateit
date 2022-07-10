import React from "react";
import LoadingAnimation from './media/loading.svg';

const Loading = () => {
  return (
    <div style={{ position: "relative", display: "block", margin: "auto", textAlign: "center", verticalAlign: "middle"}} >
      <img src={LoadingAnimation} alt="loading"></img>
    </div>
  );
};

export default Loading;
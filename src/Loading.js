import React from "react";
import LoadingAnimation from './media/loading.svg';

const Loading = () => {
  return (
    <div style={{ position: "relative", display: "block", margin: "auto", textAlign: "center", verticalAlign: "middle", marginTop: "17%"}} >
      <img src={LoadingAnimation} alt="loading"></img>
    </div>
  );
};

export default Loading;
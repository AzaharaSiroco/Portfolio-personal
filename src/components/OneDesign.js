import React from "react";
import designdata from "../data/designdata.json";

const OneDesign = (props) => {
  const renderDesign = () => {
    return designdata.map((img, index) => {
      return <li key={index}>{img}</li>;
    });
  };
  return (
    <div>
      <img src={designdata.img}></img>
      <ul>{renderDesign()}</ul>
    </div>
  );
};

export default OneDesign;

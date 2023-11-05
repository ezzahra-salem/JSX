import React from "react";
import Name from "./Name";
import Description from "./Description";
import Image from "./Image";
import Price from "./Price";
import data from "./data.json";
export const Product = () => {
  const showName = () => {
    alert(`the product name is ${data.name}`);
  };
  return (
    <div className="card">
      <Image />
      <Name />
      <Description />
      <Price />
      <button onClick={showName}>show-name</button>
    </div>
  );
};

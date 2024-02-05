import React from "react";
import { Hero } from "../components";
import { customFetch } from "../utils/customFetch";
import Featured from "../components/Featured";

const url = "/products?featured=true";
export const loader = async () => {
  const response = await customFetch(url);
  //console.log(response);
  const products = response.data.data;
  //console.log(products)
  return {products};
};

function Landing() {
  return (
    <div>
      <Hero />
      <Featured/>
    </div>
  );
}

export default Landing;

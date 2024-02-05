import React from "react";
import SectionHeadings from "./SectionHeadings";
import ProductsGrid from "./ProductsGrid";

function Featured() {
  return (
    <div className="pt-24 ">
      <SectionHeadings text="featured products" />
      <ProductsGrid />
    </div>
  );
}

export default Featured;

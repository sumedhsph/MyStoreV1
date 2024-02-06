import React, { useState } from "react";
import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils/customFetch";

const url = "/products";
export const loader = async ({ request }) => {
  //filter products
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries()
  ]);
 // console.log(params);

  const res = await customFetch(url, {params});
  //console.log(request);
  const products = res.data.data;
  const meta = res.data.meta;
  return { products, meta, params };
};

function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}

export default Products;

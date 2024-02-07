import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { formatPrice, customFetch } from "../utils/customFetch";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

export const loader = async ({ params }) => {
  const res = await customFetch(`/products/${params.id}`);
  return { product: res.data.data };
};

function SingleProduct() {
  const { product } = useLoaderData();
  //console.log(product);
  const { image, title, price, description, colors, company } =
    product.attributes;
  const inrPrice = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  //console.log(colors);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    company,
    productColor,
    amount
  };
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };

  return (
    <div>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li className="capitalize">{title}</li>
        </ul>
      </div>

      {/* Product */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2  lg:gap-x-16">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />

        {/* PRODCUT INFO */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>

          <p className="mt-3 text-xl">{inrPrice}</p>

          <p className="mt-6 leading-8">{description}</p>

          {/* COLORS */}
          <div className="mt-2">
            <h4>Colors:</h4>
            <div className="flex space-x-3">
              {colors.map((color, index) => {
                return (
                  <button
                    type="button"
                    key={index}
                    style={{ backgroundColor: `${color}` }}
                    className={`w-8 h-8 rounded  ${
                      color === productColor && "border-4 border-secondary"
                    }`}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>

          <div className="mt-6">
            <label className="label">
              <h4 className="text-md font-medium tracking-wider capitalize">
                quantity
              </h4>
            </label>
            <select
              className="select select-primary select-sm w-full max-w-xs"
              value={amount}
              onChange={handleAmount}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>

          <button
            className="btn btn-secondary btn-md mt-6"
            onClick={addToCart}
          >
            Add to cart <FaCartPlus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;

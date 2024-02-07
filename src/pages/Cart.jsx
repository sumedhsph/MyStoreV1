import React from "react";
import { useSelector } from "react-redux";
import { CartTotal, CartItemsList, SectionHeadings } from "../components";
import { Link } from "react-router-dom";
function Cart() {
  //temp
  const user = null;
  const numItemsCart = useSelector((state) => state.cartState.numItemsCart);

  if (numItemsCart === 0) {
    return <SectionHeadings text="Your cart is empty" />;
  }

  return (
    <>
      <SectionHeadings text="Shopping cart" />
      <div className="mt-8 grid gap-8  lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotal />
          {user ? (
            <Link to="/checkout" className="btn btn-primary btn-block mt-8">
              Proceed to checkout
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary btn-block mt-8">
              please login
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;

import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
function cartItemsList() {
  const cartItems = useSelector((state) => state.cartState.cartItems);
  //console.log(cartItems);
  return (
    <>
      {cartItems &&
        cartItems.map((item) => {
          return <CartItem key={item.cartID} cartItem={item} />;
        })}
    </>
  );
}

export default cartItemsList;

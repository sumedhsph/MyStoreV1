import { createSlice, nanoid } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0
};

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || initialState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage,
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      //console.log(product);
      const item = state.cartItems.find(
        (item) => item.cartID === product.cartID
      );
      //console.log(item);
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;
      //calculate total
      cartSlice.caseReducers.calculateTotal(state);
      toast.success("Item added to cart");
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(initialState));
      return initialState;
    },

    removeItem: (state, action) => {
      const { cartID } = action.payload;
      console.log(action.payload)
      const product = state.cartItems.find((item) => item.cartID === cartID);
      state.cartItems = state.cartItems.filter(
        (item) => item.cartID !== cartID
      );
      state.numItemsInCart -= product.amount;
      state.cartTotal -= product.price * product.amount;
      //calculate total
      cartSlice.caseReducers.calculateTotal(state);
      toast.success("Item removed from cart");
    },
    editItem: (state, action) => {
      const { cartID, amount } = action.payload;
      const item = state.cartItems.find(
        (item) => item.cartID === cartID
      );
      state.numItemsInCart += amount - item.amount;
      state.cartTotal += item.price * (amount - item.amount);
      item.amount = amount;
      toast.success("Cart updated");
    },
    calculateTotal: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    }
  }
});

//export reducers actions
export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItemCard from "./FoodItemCard";
import { clearCart } from "../Utils/cartSlice";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const HandleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-clear-btn">
      {cartItems.length === 0 ? <EmptyCart /> : null}

      {cartItems.length > 0 ? <h1>cart items -- {cartItems.length}</h1>:null}
      <button onClick={() => HandleClearCart()}>Clear Cart</button>
      {cartItems.map((item) => (
        <FoodItemCard key={item.id} {...item} />
      ))}
    </div>
  );
  
};

export default Cart;

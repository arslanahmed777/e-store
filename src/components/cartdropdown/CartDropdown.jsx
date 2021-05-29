import React from "react";
import "./CartDropdown.style.scss";
import Button from "../button/Button";

import CartItem from "../cartitem/CartItem";

import { connect } from "react-redux";

import { selectCartItems } from "../../redux/cart/CartSelectors";

import { withRouter } from "react-router-dom";

import { toggleCartHidden } from "../../redux/cart/CartActions";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const goTocheckout = () => {
    history.push("/checkout");
    dispatch(toggleCartHidden());
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} item={cartItem} />;
          })
        ) : (
          <span className="empty-message">Your Cart is empty</span>
        )}
      </div>

      <Button onClick={goTocheckout}>Go to Checkout</Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default withRouter(connect(mapStateToProps)(CartDropdown));

import { createSelector } from "reselect";

/*
there are two types of selectors

input selector: that dosent used creat selector

output selector: that does use input selecto and create selector to create them selves

input selector is a funtion that take state and return slice of it


*/

const selectCart = (state) => state.cart; // input seletor

// output selector itakes first argument as array of inputselectors and second argument will be function that will return the value we want

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

// output selector can also take first argument as another output selector
export const selectCartItemscount = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((acc, val) => acc + val.quantity, 0);
  }
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((acc, val) => acc + val.price * val.quantity, 0);
  }
);

import { combineReducers } from "redux";
import UserReducer from "./user/UserReducer";
import CartReduceer from "./cart/CartReducer";
import DirectoryReducer from "./directory/DirectoryReducer";
import ShopReducer from "./shop/ShopReducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReduer = combineReducers({
  user: UserReducer,
  cart: CartReduceer,
  directory: DirectoryReducer,
  shop: ShopReducer,
});

export default persistReducer(persistConfig, rootReduer);

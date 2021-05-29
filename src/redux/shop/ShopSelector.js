import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key]) // also use object.values (without map)
);

export const selectCollection = (collectionUrlParam) => {
  return createSelector([selectCollections], (collection) => {
    return collection[collectionUrlParam];
  });
};

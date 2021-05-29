import React from "react";
import "./Collection.style.scss";
import { selectCollection } from "../../redux/shop/ShopSelector";

import CollectionItem from "../../components/collectionItem/CollectionItem";

import { connect } from "react-redux";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownprops) => ({
  collection: selectCollection(ownprops.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);

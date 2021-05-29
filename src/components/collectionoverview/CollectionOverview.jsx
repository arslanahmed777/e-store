import React from "react";
import "./CollectionOverview.style.scss";
import CollectionPreview from "../collectionPreview/CollectionPreview";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/ShopSelector";

const CollectionOverview = ({ collections }) => {
  return (
    <div>
      {collections.map(({ id, ...othercollectionprops }) => (
        <CollectionPreview key={id} {...othercollectionprops} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);

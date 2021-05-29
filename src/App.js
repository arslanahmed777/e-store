import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SigninSignup from "./pages/signin_signup/SigninSignup";
import CheckoutPage from "./pages/checkout/CheckoutPage";

import {
  auth,
  createUserProfileDocument,
  addCollection,
  firestore,
} from "./firebase/Firebase";

import firebase from "firebase/app";
import "firebase/firestore";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/UserActions";

import { selectCurrentUser } from "./redux/user/UserSeletors";
import { selectCollectionsForPreview } from "./redux/shop/ShopSelector";

class App extends Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser, collections } = this.props;
    console.log("collection", collections);
    const items = {
      name: "arslan",
      age: 23,
    };
    // collections.forEach((coll) => {
    //   addCollection("collection", coll);
    // });

    // firestore.collection("collection").onSnapshot((snapshot) => {
    //   snapshot.docs.map((dd) => {
    //     console.log(dd.data());
    //   });
    // });

    // firestore
    //   .collection("collection")
    //   .doc("2vsvG4hSyVnIiKCZjRmh")
    //   .onSnapshot((snapshot) => {
    //     console.log(snapshot.data());
    //   });

    firestore.collection("collection").onSnapshot((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    });

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });

          // console.log(this.state);
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SigninSignup />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  collections: selectCollectionsForPreview(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

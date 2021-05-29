import React from "react";
//import "./Homepage.style.scss";
import { HomePageContainer } from "./homepage.style";

import DirectoryMenu from "../../components/directoryMenu/DirectoryMenu";

const Homepage = () => {
  return (
    <HomePageContainer>
      <DirectoryMenu />
    </HomePageContainer>
  );
};

export default Homepage;

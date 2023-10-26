import React from 'react';
import MainContainer from "components/MainContainer";
import LandingTitle from "components/LandingTitle";
import Categories from "components/Categories";
import HeaderContainer from "../../components/HeaderContainer";

const Landing = () => {

  return (
    <MainContainer>
      <HeaderContainer>
        <LandingTitle/>
        <Categories/>
      </HeaderContainer>
    </MainContainer>
  );
};

export default Landing;
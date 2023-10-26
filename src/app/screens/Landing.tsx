import React from 'react';
import MainContainer from "components/MainContainer";
import LandingTitle from "components/LandingTitle";
import Categories from "components/Categories";
import HeaderContainer from "components/HeaderContainer";
import ContentContainer from "components/ContentContainer";
import {Outlet} from "react-router-dom";

const Landing = () => {

  return (
    <MainContainer>
      <HeaderContainer>
        <LandingTitle/>
        <Categories/>
      </HeaderContainer>
      <ContentContainer>
        <Outlet/>
      </ContentContainer>
    </MainContainer>
  );
};

export default Landing;
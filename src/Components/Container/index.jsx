import React from 'react';
import {ContainerStyle} from './styles'
import Main from "./Main";
import {Header} from "./Header";
import {Footer} from "./Footer";

export const Container = () => {
  return (
    <ContainerStyle>
      <Header/>
      <Main/>
      <Footer/>
    </ContainerStyle>
  );
}

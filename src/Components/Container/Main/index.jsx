import React from 'react';
import {
  FlexContainerStyle,
  MainDivStyle,
  MainWrapperStyle,
  PhoneStyle,
  SidebarStyle
} from "./styles";
import Card from "./Pages/Blocks/Card/Card";
import Basket from "./Pages/Blocks/Basket";

const Main = () => {
  return (
    <MainDivStyle>
      <FlexContainerStyle>
        <SidebarStyle>
          <span style={{fontWeight: 'bold'}}>Товары:</span>
          <PhoneStyle>
            <span style={{fontSize: 26, marginRight: 5, paddingLeft: 7}}><i className="fas fa-mobile"></i></span>
            <a href="/">Телефоны</a>
          </PhoneStyle>
          <PhoneStyle>
            <span style={{fontSize: 26, marginRight: 5}}><i className="fas fa-shopping-cart"></i></span>
            <a href="#">Карзина</a>
          </PhoneStyle>
        </SidebarStyle>
        <MainWrapperStyle>
          <Card/>
          <Basket/>
        </MainWrapperStyle>
      </FlexContainerStyle>
    </MainDivStyle>
  )
}

export default Main
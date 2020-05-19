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
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

const Main = () => {
  return (
    <MainDivStyle>

      <Router>
        <FlexContainerStyle>
          <SidebarStyle>
            <span style={{fontWeight: 'bold'}}>Товары:</span>
            <PhoneStyle>
              <span style={{fontSize: 26, marginRight: 5, paddingLeft: 7}}><i className="fas fa-mobile"></i></span>

              <Link to="/">Телефоны</Link>

            </PhoneStyle>
            <PhoneStyle>
              <span style={{fontSize: 26, marginRight: 5}}><i className="fas fa-shopping-cart"></i></span>

              <Link to="basket">Карзина</Link>

            </PhoneStyle>
          </SidebarStyle>
          <MainWrapperStyle>

            <Switch>
              <Route path="/" exact><Card/></Route>
              <Route path="/basket"><Basket/></Route>
            </Switch>

          </MainWrapperStyle>
        </FlexContainerStyle>
      </Router>

    </MainDivStyle>
  )
}

export default Main
import React from 'react';
import {DescriptStyle, HeaderStyle, LogoStyle} from "./styled";
import {BrowserRouter as Router, Link} from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderStyle>
      <Router>
        <LogoStyle>
          <Link to="/" exact>Logo</Link>
        </LogoStyle>
      </Router>
      <DescriptStyle>
        Интернет магазин - на диване!!!
      </DescriptStyle>
    </HeaderStyle >
  );
}

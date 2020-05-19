import React from 'react';
import {DescriptStyle, HeaderStyle, LogoStyle} from "./styled";

export const Header = () => {
  return (
    <HeaderStyle>
      <LogoStyle>
        Logo
      </LogoStyle>
      <DescriptStyle>
        Интернет магазин - на диване!!!
      </DescriptStyle>
    </HeaderStyle >
  );
}

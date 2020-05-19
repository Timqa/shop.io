import styled from 'styled-components'

export const HeaderStyle = styled.header`
display:flex;
flex-wrap: wrap;
padding: 10px;
border-bottom-right-radius: 7px;
border-bottom-left-radius: 7px;
box-shadow: 0px 1px 12px 2px grey;
transition: all .4s ease;

 &:hover {
    box-shadow: 0px 8px 12px 2px grey;
  }
`

export const LogoStyle = styled.div`
  max-width: 150px;
  height: 25px;
  margin auto 0;
  padding: 4px 15px;
  background: #CD853F;
  border-radius: 7px;
  box-shadow: 1px 1px 9px 6px #B0E0E6;
  
  a {
    text-decoration: none;
    color: white;
  }
  `

export const DescriptStyle = styled.div`
 margin: auto;
 padding 10px;
`
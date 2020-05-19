import styled from 'styled-components'

export const CardContainer = styled.div`
  max-width: 250px;
  width: 100%;
  margin: 10px 5px;
  display:flex;
  flex-direction: column;
  text-align: center;
  background: white;
  border-radius: 4px;
  transition: all .4s ease;
  
  &:hover {
    box-shadow: 0px 0px 12px 4px grey;
    transform: scale(1.01);
  }
  
  img {
    margin-top: 5px;
    max-width: 150px;
    width: 100%;
    align-self: center;
    border-radius: 4px;
  }
`

export const Button = styled.button`
  display: inline-block;
  color: white;
  text-decoration: none;
  padding: .5em 2em;
  margin-bottom: 5px;
  outline: none;
  border-width: 2px 0;
  border-style: solid none;
  border-color: #FDBE33 #000 #D77206;
  border-radius: 6px;
  background: linear-gradient(#F3AE0F, #E38916) #E38916;
  transition: 0.2s;
    
  &:hover {
    background: linear-gradient(#f5ae00, #f59500) #f5ae00;
  }
  
  &:active {
    background: linear-gradient(#f59500, #f5ae00) #f59500;
  }
`
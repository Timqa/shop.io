import styled from 'styled-components'

export const MainDivStyle = styled.main`
  flex: 1 1 auto;
  margin: 10px 0;
`

export const FlexContainerStyle = styled.div`
  display: flex;
`

export const SidebarStyle = styled.div`
  max-width: 250px;
  min-width: 150px;
  padding: 10px;
`

export const MainWrapperStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
`

export const PhoneStyle = styled.div`
  padding: 0px 5px;
  margin: 5px 0;
  border-radius: 4px;
  display: flex;
  
  a {
    display: inline-block;
    height: 100%;
    margin: auto 0 auto auto;
    text-decoration: none;
    color: black;
  }
  
  &:hover {
    background: linear-gradient(#f5ae00, #f59500) #f5ae00;
  }
`
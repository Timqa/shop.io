import styled from 'styled-components'

export const Table = styled.table `
 font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  font-size: 14px;
  background: white;
  max-width: 70%;
  width: 70%;
  border-collapse: collapse;
  text-align: left; 
  table-layout: fixed;
  margin: 0 auto;
  
  th {
  font-size: 13px;
  font-weight: normal;
  background: #b9c9fe;
  border-top: 4px solid #aabcfe;
  border-bottom: 1px solid #fff;
  color: #039;
  padding: 8px;
  }
  
  td {
    background: #e8edff;
    border-bottom: 1px solid #fff;
    color: #669;
    border-top: 1px solid transparent;
    padding: 4px 8px;
  }
  tr:hover td {background: #ccddff;}
`

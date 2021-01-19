import styled from 'styled-components'

export const Legend = styled.ul`
  box-shadow: 5px 0 5px rgba(0,0,0,0.1);
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-rows: 16px 30px 35px 110px 60px 60px 50px 100px;
  user-select: none;
  z-index: 1;
`

export const LegendLabel = styled.li`
  width: 66px;
  height: 100%;
  padding: 0 2px;
  font-size: 10px;
  color: #888;
  letter-spacing: .2px;
  border-top: solid 1px #eee;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  
  &:first-child{
    border: 0;
  }
`

export const CenterText = styled.span`
  text-align: center;
`
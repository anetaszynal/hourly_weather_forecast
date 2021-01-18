import styled, { createGlobalStyle } from 'styled-components'
import {LABEL_WIDTH} from './lib/consts'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, ::before, ::after {
    box-sizing: inherit;
  }
  
  body{
    margin: 0;
    font-family: "Fira Sans", Arial, Helvetica, Verdana,sans-serif;
  }
`

export const WidgetWrapper = styled.main`
  display: grid;
  grid-template-columns: ${LABEL_WIDTH}px 1fr;
  user-select: none;
`;
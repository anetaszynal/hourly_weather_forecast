import styled from "styled-components";
import searchIcon from './searchIcon.svg'

export const Content = styled.form`
  display: grid;
  grid-template-columns: 1fr;
`;

export const Input = styled.input`
    margin: 20px auto;
    width: 60%;
    border: 1px solid #000000;
    line-height: 33px;
    border-radius: 17px;
    padding: 0 31px 0 60px;
    color: #3a3a3a;
    min-width: 250px;
    background: url(${searchIcon}) no-repeat center left 20px ;
`;
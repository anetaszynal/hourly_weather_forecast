import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  scroll-behavior: smooth;
  position: relative;
  cursor: grab;
  
  ${({ visible }) => visible && css`
  overflow: scroll;
    `}
 
  
  &::-webkit-scrollbar {
    transition-duration: 400ms;
    display: block;
    height: 2px;
    background: #dcdcdc;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 6;
  }
  
  &::-webkit-scrollbar-thumb{
    position: relative;
    background: rgba(0,0,0,0.5);
    border-radius: 10px;
    left: 0;
    top: 0;
    transition-duration: 0ms;
    transform: translate3d(34.375px, 0px, 0px);
    width: 105.035px;
  }
`

export const SliderBox = styled.div`
  position: fixed;
  top: 212px;
  margin-right: -30px;
  display: flex;
  cursor: pointer;
  z-index: 6;
  height: 60px;
  width: 30px;
  border-radius: 0 60px 60px 0;
  background: rgba(0,0,0,0.1);
  
  &:hover{
    background: rgba(0,0,0,0.15);
  }
  
   ${({ back }) => back && css`
     right: 0;
     margin-right: 0;
     transform: rotateY(180deg);
    `}
   
     ${({ hidden }) => hidden && css`
     visibility: hidden;
    `}
`

export const Arrow = styled.div`
    font-size: 18px;
    color: white;
    margin: 21px 4px;
`
export const Shadow = styled.div`
    position: fixed;
    right: -1px;
    top: 0;
    width: 120px;
    height: 100%;
    z-index: 3;
    background: linear-gradient(to right, rgba(255,255,255,0) 0, #fff 100%);
`;


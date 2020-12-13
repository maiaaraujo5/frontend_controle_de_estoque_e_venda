import styled, {css} from "styled-components";

import Tooltip from "../Tooltip";

interface ContainerProps {
    isFocused: boolean
    isFilled: boolean
    isErrored: boolean
}


export const Container = styled.div<ContainerProps>`
      color: #000;
      border-bottom: 1.7px solid #232129;
      padding: 16px;
      width: 100%;
      
      display: flex;
      align-items: center;
      
       & + div {
        margin-top: 8px
      }
      
      ${(props) => props.isErrored && css`
            border-color: #c53030;
      `}
      
      ${(props) => props.isFocused && css`
            color: #975D53;
            border-color: #975D53;
      `}
      ${(props) => props.isFilled && css`
            color: #975D53;
      `}
      
            
 input {
      color: #000;
      flex:1;
      border:0;
      background: transparent;
      &::placeholder{
        color: #666360
      }
      
    }
    
    svg {
      margin-right: 16px;
    }
`;

export const Error = styled(Tooltip) `
 height: 20px;
 margin-left: 16px;
 svg {
    margin: 0;
 }
 span{
   background: #c53030;
   color: #fff;
   
   &::before {
     border-color: #c53030 transparent;
   }
 }
`;
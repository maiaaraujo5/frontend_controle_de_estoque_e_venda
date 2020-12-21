import styled from "styled-components";

export const Container = styled.div`
       display: flex;
       width: calc(100% - 1em);
       height: 150px;
       background-color: #F3F3F5;
       border-radius: 4px;
       color: black;
       box-shadow: 0 1px 2px rgba(0,0,0,.05), 0 0 0 1px rgba(63,63,68,.1);
`;

export const Image = styled.div`
      display: flex;
      align-items: center;
      margin-left: calc(2em);
      
      svg {
           font-size: 60px;
       }
`;

export const Content = styled.div`
    width: calc(100% - 1em);
    display: block;
    text-align: right;
    
    p {
        margin-right: 35px;
        margin-top: 30px;
        font-size: 20px;
        line-height: 1.5;
        font-weight: 400;
    }
    
    h1 {
        font-weight: 900;
        margin-top: 10px;
        margin-right: 30px
    }
`;
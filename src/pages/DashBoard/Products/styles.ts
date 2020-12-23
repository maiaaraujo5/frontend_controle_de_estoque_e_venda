import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
`;

export const Content = styled.div`
    width: 100%;
    height: 100vh;
    margin-left: 20px;
`;

export const Search = styled.div`
    display: block;
    width: 100%;
    margin-top: 40px;
`;

export const Products = styled.div `
    width: 100%;
    max-height: 400px;
    display: grid;
    
   grid-template-columns: repeat(6, 1fr);
   grip-gap: 10px;
   
   @media only screen and (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
    }
  
     @media only screen and (max-width: 1667px) {
      grid-template-columns: repeat(4, 1fr);
    }
    
     @media only screen and (max-width: 1350px) {
      grid-template-columns: repeat(3, 1fr);
    }
    
     @media only screen and (max-width: 1028px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
     @media only screen and (max-width: 705px) {
      grid-template-columns: repeat(1, 1fr);
    }  
`;

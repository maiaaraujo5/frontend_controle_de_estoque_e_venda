import styled from "styled-components";

export const ProductsContainer = styled.div`
    width: 100%
    max-width: 1280px;
    margin: 0 auto;
    padding: 40px 0;
    margin-left: 50px;
    
    display: grid;
    
    grid-template-columns: repeat(5, 1fr);
    grip-gap: 32px;
    
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
    
    &{
        margin-left: 50px;
    }
`;


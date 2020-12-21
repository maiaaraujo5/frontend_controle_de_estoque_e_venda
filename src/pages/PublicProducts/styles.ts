import styled, {keyframes} from "styled-components";

const fadeIn = keyframes `
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const ProductsContainer = styled.div`
    width: 100%
    max-width: 1280px;
    padding: 40px 0;
    margin-left: 10%;
    margin-right: 10%;
    display: grid;
    animation: ${fadeIn} 1.5s;

    grid-template-columns: repeat(5, 1fr);
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

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

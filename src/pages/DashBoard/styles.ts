import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
     width: 100%;
    height: 100vh;
    margin-left: 20px;
`;

export const Aside = styled.div`
        display: fixed;
        height: calc(100% - 10px);
`;

export const Cards = styled.div`
     display: grid;
     flex-direction: column;
     grid-template-columns: repeat(4, 1fr);
     grid-gap: 15px;
     width: 100%;
     margin-top: 157px;
     
    @media only screen and (max-width: 1660px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media only screen and (max-width: 1050px) {
      grid-template-columns: repeat(1, 1fr);
    }
`;

export const Charts = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    color: black;
    
    // @media only screen and (max-width: 2340px) {
    //   grid-template-columns: repeat(1, 1fr);
    // }  
`;

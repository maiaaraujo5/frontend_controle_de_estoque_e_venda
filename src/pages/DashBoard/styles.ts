import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
`;

export const Content = styled.div`
    display: block;
    width: 100%;
    height: 100vh;
`;

export const Aside = styled.div`
        display: block;
        height: 100%;
`;

export const Cards = styled.div`
     color: black;
     margin-top: 70px;
     display: grid;
     grid-template-columns: repeat(4, 1fr);
     grid-gap: 10px;
    
`;
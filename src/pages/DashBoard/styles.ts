import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

export const Aside = styled.div`
        display: block;
        height: 100%;
`;

export const Cards = styled.div`
     display: grid;
     grid-template-columns: repeat(4, 1fr);
     grid-gap: 0px;
     width: 100%;
     margin-top: 157px;
     margin-left: 70px;
`;
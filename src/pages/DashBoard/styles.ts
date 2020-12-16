import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;
    width: 100%;
`;

export const Content = styled.div`
    display: relative;
    width: 100%;
    height: 100vh;
    
    h1 {
        text-align: center;
        color: black;
    }
`;

export const Aside = styled.div`
        display: flex;
        position: fixed;
        height: 100%;
        width: 100%;
`;

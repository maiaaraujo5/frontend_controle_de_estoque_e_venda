import styled from "styled-components";
import loginBackGroundImage from '../../assets/login-image.jpg'

export const Container = styled.div`
   height: 100vh;
   display: flex;
   align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    place-content: center;
    
    width: 100%;
    max-width: 700px
`;

export const Background = styled.div`
    flex: 1; 
    background: url(${loginBackGroundImage}) no-repeat center;
    background-size: cover;
`;

export const AnimationContainer = styled.div`

`;
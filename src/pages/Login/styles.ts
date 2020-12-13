import styled, {keyframes} from "styled-components";
import loginBackGroundImage from '../../assets/login-image.jpg'

export const Container = styled.div`
   height: 100vh;
   display: flex;
   align-items: stretch;
   
   .split {
     height: 100%;
     width: 50%;
     position: fixed;
     z-index: 1;
     top: 0;
     overflow-x: hidden;
     padding-top: 20px;
   }
   
   .left {
     left: 0;
    }

    .right {
       right: 0;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    place-content: center;
    
    width: 100%;
`;

export const Background = styled.div`
    flex: 1; 
    background: url(${loginBackGroundImage}) no-repeat center;
    background-size: cover;
`;

const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const AnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    animation: ${appearFromLeft} 1s;
    
    form {
        margin: 80px 0;
        width: 500px;
        text-align: center;
    }
`;
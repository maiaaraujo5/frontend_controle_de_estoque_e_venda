import styled from "styled-components";

export const Content = styled.div`
    height: 100%;
    width: 12%;
    max-width: 12%;
    background-color: #EDE0D3;
    display: block;
    header {
        padding-top: 40px;
        display: block;
        align-items: center;
        text-align: center;
        justify-content: center;
        color: #000;
        font-size: 16px;
        font-weight: 600;
       
        img {
            padding-bottom: 10px;
            border-radius: 50%; 
            height: 240px;       
        }
        
    }
    
    menu {
        margin-top: 30px;
        align-items: center;
        text-align: center;
        section.options {
           a {
               text-decoration: none;
               display: block;
               color: black;
               font-size: 20px;
               svg {
                   color: black;
                   
               }
           }
           
           > a {
               margin-top: 20px;
           }
        }
    }
`;
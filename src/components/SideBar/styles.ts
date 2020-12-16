import styled from "styled-components";

export const Content = styled.div`
    height: 100%;
    width: 11%;
    max-width: 11%;
    background-color: #EDE0D3;
    display: block;
    header {
        padding-top: 40px;
        display: block;
        align-items: center;
        text-align: center;
        justify-content: center;
        background:rgba(0,0,0,0.1);
        border-radius: 10px;
        
        img {
            margin-top: 30px;
            border-radius: 50%; 
            width: 160px;    
            overflow: hidden;   
            border: 4px solid #DEBCB9;
            box-shadow: 0 0 0 4px #DEBCB9;
        }
        
        h2 {
            margin-top: 10px;
            font-weight: 600;
            color: #000;
        }
        
    }
    
    menu {
        margin-top: 30px;
        section.options {
           a {
               padding-left: 90px;
               text-decoration: none;
               display: block;
               color: black;
               font-size: 20px;
               svg {
                   color: black;
                   
               }
            
            &:hover {
                background: rgba(0,0,0,0.1)
            } 
            
           }
           
           > a {
               margin-top: 20px;
           }
        }
    }
`;
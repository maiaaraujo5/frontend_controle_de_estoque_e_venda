import styled from 'styled-components'
import {shade} from 'polished';
export const Container = styled.div`
    background: #FFFF;
    padding 20px 0;
    
    header {
        width: 300px;
        margin: 0 auto;
        padding: 0 0 35px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        img {
           width: 305px;
        }
    }
    
    menu {
        background: #F3F3F5;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 55%;
        height: 80px;
        border-radius: 7px 7px 7px 7px;
        
        a {
             text-decoration: none;
             color: #000;
             display: inline-flex;
             font-size: 25px;
             font-weight: 400;
             transition: color 0.4s;
             &:hover {
                color: ${shade(0.5, '#fff')}
             }
        }
        
        a + a {
            margin-left: 20px;
        }
        
    }
`;
import styled from "styled-components";

export const Content = styled.div`
    height: 100%;
    width: 280px;
    background-color: #F3F3F5;
    display: block;
    }
`;

export const Logo = styled.div`
        background-color: #F3F3F5;
        padding: 10px 0 10px 0;
       
        img {
             height: 130px;
        }  
`;

export const Header = styled.div`
        display: block;
        align-items: center;
        text-align: center;
        justify-content: center;
        background:rgba(0,0,0,0.1);
        
        h2 {
            margin-top: 10px;
            font-weight: 600;
            color: #000;
        }
`;

export const PictureProfile = styled.div`
          img {
            margin-top: 20px;
            border-radius: 50%; 
            width: 160px;    
            overflow: hidden;   
            border: 4px solid #F3F3F5;
            box-shadow: 0 0 0 4px #F3F3F5;
           }
`;

export const Menu = styled.div`
        display: block;
        margin-top: 17px;
`;

export const Option = styled.div`
      height: 40px;
      display: flex;
      align-items: center;
      &:hover {
                background: rgba(0,0,0,0.1);
              } 
      
       a {
           text-align: center;
           text-decoration: none;
           margin-left: 10px;
           color: black;
           font-size: 20px;
         }
       
       svg {
            margin-left: 73px;
            color: black;
            font-size: 23px;
       }
       
       svg + a {
            margin-right: 10px;
       }
      
`;
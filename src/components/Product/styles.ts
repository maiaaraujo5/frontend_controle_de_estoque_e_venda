import styled from "styled-components";

export const Container = styled.div`
    width: calc(100% - 1em);
    position: relative;
    box-shadow: 0 2px 7px #dfdfdf;
    margin: 50px auto;
    background: #fafafa;
    border-radius: 4px;
    
  transition: box-shadow 0.4s ease-in-out;
  
  &:hover{
    box-shadow: 20px 0px 12px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 20px rgba(0, 0, 0, 0.30);  
    cursor: pointer;
    display: true;
  }
`;

export const Badge = styled.div`
    position: absolute;
    left: 0;
    top: 20px;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 700;
    background: red;
    color: #fff;
    padding: 3px 10px;
`;

export const Image = styled.div`
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    padding: 50px;
    background: #f0f0f0;
    
    img {
         max-width: 100%;
         max-height: 100%;
    }
`;

export const Details = styled.div`
     padding: 30px;
`;

export const Category = styled.span`
    display: block;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    color: #ccc;
    margin-bottom: 18px;
`;

export const Title = styled.h4`
    font-weight: 900;
    cursor: pointer;
    display: block;
    margin-bottom: 18px;
    text-transform: uppercase;
    color: #363636;
    text-decoration: none;
    transition: 0.3s;
    
    &:hover {
        color: #fbb72c;
    }
`;

export const Description = styled.p`
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 18px;
    color: #999;
`;

export const Bottom = styled.div`
    overflow: hidden;
    border-top: 1px solid #eee;
    padding-top: 20px;
`;

export const Price = styled.div`
    float: left;
    font-size: 18px;
    color: #fbb72c;
    font-weight: 600;
    
    small {
        font-size: 80%;
        font-weight: 400;
        text-decoration: line-through;
        display: inline-block;
        margin-right: 5px;
}
`;

export const Links = styled.div `
    text-align: right;
    
    a {
         display: inline-block;
         margin-left: 5px;
         color: #e1e1e1;
         transition: 0.3s;
         font-size: 27px;
         
         &:hover {
            color: #fbb72c;
         }
}
`;
import styled, {css} from "styled-components";

export const Container = styled.div`
  border-radius: 20px;
  margin-top: 20px;
  width: 320px;
  max-width: 320px;
  
  transition: box-shadow 0.4s ease-in-out;
  
  &:hover{
    box-shadow: 20px 0px 12px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 20px rgba(0, 0, 0, 0.30);  
    cursor: pointer;
    display: true;
  }
  
  header {
    border-radius: 8px 8px 0px 0px;
    height: 320px;
    overflow: hidden;
    transition: 0.3s opacity;
    
    img {
      width: 320px;
      border-radius: 7px;
    }
    
     .icon-cart {
        display: none;
        width: 53px;
       -webkit-transform: scaleX(-1);
       transform: scaleX(-1);
       position: absolute;
       margin-top: 248px;
       margin-left:-60px;
       background: #fff;
       border-radius: 50px;
       }
  }
  section.body {
    margin-top: -42px;
    padding: 10px;
    overflow: hidden;
    h1 {
      color: #3d3d4d;
    }
    p {
      color: #3d3d4d;
      margin-top: 10px;
    }
    
    .category{
       font-size: 13px;
       color: #a9b1be;
       font-weight: 400;
    }
    .price {
      font-style: normal;
      font-size: 21px;
      line-height: 34px;
      color: #000;
      b {
        font-weight: 600;
      }
    }
  }
  section.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    background: #e4e4eb;
    border-radius: 0px 0px 8px 8px;
    div.icon-container {
      display: flex;
      button {
        background: #fff;
        padding: 10px;
        border-radius: 8px;
        display: flex;
        border: none;
        transition: 0.1s;
        svg {
          color: #3d3d4d;
        }
        & + button {
          margin-left: 6px;
        }
      }
    }
    div.availability-container {
      display: flex;
      align-items: center;
      p {
        color: #3d3d4d;
      }
      .switch {
        position: relative;
        display: inline-block;
        width: 88px;
        height: 32px;
        margin-left: 12px;
        & input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #c72828;
          -webkit-transition: 0.4s;
          transition: 0.4s;
          border-radius: 16px;
          &:before {
            position: absolute;
            content: '';
            height: 20px;
            width: 40px;
            left: 8px;
            bottom: 6px;
            background-color: white;
            -webkit-transition: 0.4s;
            transition: 0.4s;
            border-radius: 10px;
          }
        }
        input:checked + .slider {
          background-color: #39b100;
        }
        input:focus + .slider {
          box-shadow: 0 0 1px #2196f3;
        }
        input:checked + .slider:before {
          -webkit-transform: translateX(32px);
          -ms-transform: translateX(32px);
          transform: translateX(32px);
        }
      }
    }
  }
`;

import styled from "styled-components";


export const Wrapper = styled.header`
position: absolute;
 display: flex;
 width: 100%;
 height: 90px;
 align-items: center;
 top: 40px;

 @media (max-width: 900px) {
  top: 0px;
}

@media (max-width: 480px) {
min-width: 300px;
justify-content: space-between;
}

 &::after{
  position: absolute;
  content: "";
  height: 1px;
  width: 40%;
  background-color:#979797;
 top: 50%;
 right: 46%;
 opacity: 0.3;
 @media (max-width: 900px) {
  display: none;
  
}

 }

`
export const Image = styled.img`
 width: 48px;
 height: 48px;
 margin:0 20px;

 @media (max-width: 600px) {
  width: 40px;
  height: 40px;
}
`
export const Nav = styled.nav`
 display: flex;
 width: 100%;
 height: 100%;
 justify-content: flex-end;
 align-items: center;

 @media (max-width: 480px) {
display:none
}

`
export const Ul = styled.ul`
 display: flex;
 width: 50%;
 height: 100%;
 justify-content: space-around;
 align-items: center;
 background-color:rgba(255, 255, 255, 0.08);
 
 backdrop-filter: blur(90px);
 @media (max-width: 900px) {
  width: 100%;
 
}

@media (max-width: 480px) {
  display: none;
}

 li{
  font-family: Barlow Condensed;
  font-size: 16px;
  font-weight: 100;
  color: #FFFFFF;
  list-style: none;
  letter-spacing: 2px;
  margin-left: 10px;
  opacity: 3.9;
 }
 a{
  position: relative;
  cursor: pointer;
  text-decoration: none;
  color: #FFFFFF;
  padding: 5px 0;

  &::after{
    position: absolute;
    content: "";
    width: 0;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #FFFFFF;
    opacity: 0.6;
    transition: ease-in-out 0.3s;
  }

  &:hover::after{
    width: 100%;
  }
 }

 span {
  font-family: Barlow Condensed;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 2.7px;
 }

`

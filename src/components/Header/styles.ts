import styled from "styled-components";


export const Wrapper = styled.header`
 position: absolute;
 display: flex;
 width: 100%;
 height: 90px;
 align-items: center;
 top: 40px;


 @media (max-width: 600px) {
  top: 20px;;
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


`
export const Ul = styled.ul`
 display: flex;
 width: 50%;
 height: 100%;
 justify-content: space-around;
 align-items: center;
 
 backdrop-filter: blur(90px);
 @media (max-width: 900px) {
  width: 100%;
  background-color:rgba(255, 255, 255, 0.08);
}

@media (max-width: 600px) {
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
 span {
  font-family: Barlow Condensed;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 2.7px;
 }
`

import styled,{css} from "styled-components";
import { INav } from "./AsideMenu";


export const Nav = styled.nav<INav>`
 position: absolute;
 display:none;
 min-width: 60%;
 height: 100vh;
 left: -100%;
 padding-right: 20px;
 top:0;
 backdrop-filter: blur(90px);
 transition: ease-in-out 0.3s;

 ${({ isVisible }) =>
    isVisible &&
    css`
      left:0;
     
     
    `}
 @media (max-width: 480px) {
  display:flex;

}
`
export const Ul = styled.ul`
display: flex;
 flex-direction: column;
 align-items:self-start;
 width: 100%;
 height: 100%;
 gap: 30px;
 padding: 80px 10px;

 li{
  font-family: Barlow Condensed;
  font-size: 16px;
  font-weight: 100;
  width: fit-content;
  color: #FFFFFF;
  list-style: none;
  letter-spacing: 2px;
  margin-left: 10px;
  opacity: 3.9;
 }
 span {
  font-family: Barlow Condensed;
  width: fit-content;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 2.7px;
 }
`

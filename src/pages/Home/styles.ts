import styled from "styled-components";
import BackGroundDesktop from "../../assets/home/background-home-desktop.jpg"

export const Container = styled.main`
position: relative;
width: 100%;
height: 100vh;
background-image: url(${BackGroundDesktop});
background-repeat: no-repeat;
background-size: cover;

`

export const Wrapper = styled.div`
display: flex;
position: absolute;
justify-content: space-between;
align-items: center;
width: 80%;

bottom:15%;
left: calc(100vw - 90%);

`

export const Description = styled.div`
display: flex;
width: 50%;
flex-direction: column;
gap: 30px;

span{
  font-family: "Barlow Condensed";
  color: #D0D6F9;
  font-size: 28px;
  letter-spacing: 4px;
  font-weight: 100;
}
h1{
 font-family:'Helvetica Neue';
 font-size: 144px;
 color: #FFFFFF;
 font-weight: 100;


}
p{ 
  font-family: Barlow;
  color: #D0D6F9;
  font-size: 18px;
  font-weight: 100;
}
`

export const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
width: 272px;
height: 272px;

font-family: Helvetica;
font-size: 32px;
font-weight: 100;
color: #0B0D17;

border: none;
border-radius: 100%;


`
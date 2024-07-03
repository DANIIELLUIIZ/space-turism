import styled from "styled-components";
import BackGroundDesktop from "../../assets/home/background-home-desktop.jpg"
import BackGroundTablet from "../../assets/home/background-home-tablet.jpg"
import BackGroundMobile from "../../assets/home/background-home-mobile.jpg"

export const Container = styled.main`
display: flex;
width: 100%;
height: 100vh;
min-width: 300px ;
justify-content: center;
align-items: flex-end;
background-image: url(${BackGroundDesktop});
background-repeat: no-repeat;
background-size: cover;
padding: 0 30px;

@media (max-width: 950px) {
  display: flex;
  align-items: center;
  background-image: url(${BackGroundTablet});

  }

  @media (max-width: 600) {
  background-image: url(${BackGroundMobile});
 
  }

`
export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1024px;
max-height: 400px;
margin-bottom: 20vh;


@media (max-width: 900px) {
    display: flex;
    max-height: 100%;
    align-items: center; 
    flex-direction: column;
    margin-bottom: 0;
    gap: 40px;    
  }


`

export const Description = styled.div`
display: flex;
width: 50%;
flex-direction: column;
gap: 30px;

@media (max-width: 900px) {
    width: 100%;
    align-items: center;
    text-align: center;
    
  }


span{
  font-family: "Barlow Condensed";
  color: #D0D6F9;
  font-size: 28px;
  letter-spacing: 4px;
  font-weight: 100;

  @media (max-width: 600px) {
 font-size: 18px;
  }
}
h1{
 font-family:'Helvetica Neue';
 font-size: 144px;
 color: #FFFFFF;
 font-weight: 100;

 @media (max-width: 600px) {
 font-size: 80px;
  }

}
p{ 
  font-family: Barlow;
  color: #D0D6F9;
  font-size: 18px;
  font-weight: 100;

  @media (max-width: 600px) {
 font-size: 15px;
  }
}
`
export const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
width: 272px;
height: 272px;

font-family: Barlow;
font-size: 32px;
font-weight: 300;
color: #0B0D17;
background-color: FFFFFF;

border: none;
border-radius: 100%;
transition: ease-in-out 0.4s;

&:hover{
width: 280px;
height: 280px;

filter: brightness(2);

box-shadow: 0px 10px 80px 0px #FFFFFF;
}


@media (max-width: 900px) {
  margin: 0  auto;
  }

@media (max-width: 600px) {
  width: 144px;
  height: 144px;
  font-size: 18px;
  }


`



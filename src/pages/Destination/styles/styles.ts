import styled ,{keyframes}from "styled-components";

import BackGroundDesktop from "../../../assets/destination/background-destination-desktop.jpg"
import BackGroundTablet from "../../../assets/destination/background-destination-tablet.jpg"
import BackGroundMobile from "../../../assets/destination/background-destination-mobile.jpg"

const girar = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`



export const Container = styled.main`
display: flex;
flex-direction: column;
justify-content: end;
align-items: center;
width: 100vw;
height: 100vh;
min-width: 300px;
color: aliceblue;
background-image: url(${BackGroundDesktop});
background-size: cover;
background-repeat: no-repeat;

@media (max-width: 900px){
  align-items: end;
  background-image: url(${BackGroundTablet});
 }
 @media (max-width: 480px){
  align-items: end;
  background-image: url(${BackGroundMobile});
 }


`

export const TitlePage = styled.div`
display: flex;
gap: 20px;
width: 1120px;
max-width: 1080px;
font-family: ${props => props.theme.subtitle.font};
font-size: ${props => props.theme.subtitle.fontSize}px;
font-weight:${props => props.theme.subtitle.fontWeight}px;
letter-spacing: ${props => props.theme.subtitle.letterSpacing}px;
color: ${props => props.theme.subtitle.color};

span{
opacity: 0.6;
font-weight: 600;

}

`

export const Wrapper = styled.div`
display: flex;
align-items: center;
width: 1120px;
max-width:1120px;
height: 70vh;
gap: 50px;

`
export const PlanetContainer = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50%;
height: 100%;


img{
  position: absolute;
  width: 24vw;
  animation: ${girar} 100s linear infinite;
  z-index: 1000;

  
}
`

export const ContentContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
margin-left: 40px;
width: 50%;
gap: 30px;

h1{
  font-family: ${props => props.theme.title.font};
  font-size: ${props => props.theme.title.fontSize}px;
  font-weight: ${props => props.theme.title.fontWeight};
  text-transform: uppercase;

  @media (max-width: 480px){
    font-size: ${props => props.theme.title.mobile.fontSize}px;
  }

}
p{
  font-family: ${props => props.theme.description.font};
  font-size: ${props => props.theme.description.fontSize}px;
  font-weight: ${props => props.theme.description.fontWeight};
  letter-spacing: ${props => props.theme.description.letterSpacing}px;
  line-height:  ${props => props.theme.description.lineHeight}rem;
  color: ${props => props.theme.description.color};

  @media (max-width: 480px){
    font-size: ${props => props.theme.description.mobile.fontSize}px;
    letter-spacing: ${props => props.theme.description.mobile.letterSpacing}px;
  }
}

`
export const Nav = styled.nav`
display: flex;
width: 100%;
align-items: center;

ul{
  display: flex;
  align-items: center;
  gap: 20px;
  list-style: none;
li{
  position: relative;
  cursor: pointer;
  font-family: ${props => props.theme.subtitle.font};
  font-weight: 100;
  
  &::after{
  position: absolute;
  content: "";
  width: 0%;
  height: 1px;
  background-color: #FFFFFF;
  opacity: 0.6;
  bottom: -5px;
  left: 0;
  transition: ease-in-out 0.3s;
  }

  &:hover::after{
    width: 100%;
  }
}

}
`

export const InfoContainer = styled.div`
position: relative;
display: flex;
width: 100%;

&::before{
  position: absolute;
  content: "";
  width: 100%;
  height: 1px;
  background-color: #FFFFFF;
  opacity: 0.6;
  top: -20px;

}

div{
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
p{
  font-family: ${props => props.theme.description.font};
  font-size: 14px;
}
span {
  font-family: ${props => props.theme.title.font};
  font-size: 28px;
}
}
`
import styled from "styled-components";

import BackGroundDesktop from "../../assets/home/background-home-desktop.jpg"
import BackGroundTablet from "../../assets/home/background-home-tablet.jpg"
import BackGroundMobile from "../../assets/home/background-home-mobile.jpg"

export const Container = styled.main`
display: flex;
width: 100vw;
height: 100vh;
min-width: 300px;
align-items:flex-end;
justify-content: center;
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


span{
  font-family: ${props => props.theme.subtitle.font};
  font-size: ${props => props.theme.subtitle.fontSize}px;
  font-weight: ${props => props.theme.subtitle.fontWeight};
  letter-spacing: ${props => props.theme.subtitle.letterSpacing}px;
  color: ${props => props.theme.subtitle.color};

  @media (max-width: 480px){
    font-size: ${props => props.theme.subtitle.mobile.fontSize}px;
  }
}
h1{
  font-family: ${props => props.theme.title.font};
  font-size: ${props => props.theme.title.fontSize}px;
  font-weight: ${props => props.theme.title.fontWeight};

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

button{
  cursor: pointer;
  font-family: ${props => props.theme.button.font};
  font-size: ${props => props.theme.button.fontSize}px;
  font-weight: ${props => props.theme.button.fontWeight};
  width:${props => props.theme.button.width}px;
  height:${props => props.theme.button.height}px;
  border: none;
  border-radius: 100%;

  @media (max-width: 480px){
    width: ${props => props.theme.button.mobile.width}px;
    height: ${props => props.theme.button.mobile.height}px;
    font-size: ${props => props.theme.button.mobile.fontSize}px;
  }
}

`
export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
width: 1110px;
max-width: 1110px;
padding: 0 30px;
margin-bottom: 128px;

@media (max-width: 900px) {
  width: 100%;
  height: calc(100% - 200px);
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  
  padding: 0 15px;
  margin-bottom: 0;
}

@media (max-width: 480px) {
  justify-content: center;
  height:100vh;
  gap: 80px;
  margin-bottom: 0;
}
`
export const Content = styled.div`
display: flex;
flex-direction: column;
max-width:500px;

@media (max-width: 900px) {
  text-align: center;
  gap: 5px;
  
}
@media (max-width: 480px) {
 width: 100%;
  
}
`






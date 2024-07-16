import { Container, TitlePage,Wrapper,PlanetContainer,ContentContainer,Nav,InfoContainer} from "./styles/styles";
import { ThemeProvider } from "styled-components";
import fonts from "./styles/DestinationTheme";
import Moon from "../../assets/destination/image-moon.png"
import Mars from "../../assets/destination/image-mars.png"
import Europa from "../../assets/destination/image-europa.png"
import Titan from "../../assets/destination/image-titan.png"
import Data from '../../data.json'
import { useState } from "react";



export default function Destination() {
  const planets = [Moon, Mars, Europa, Titan]
 
  const destination = Data.destinations
  const [planet, setPlanet] = useState(0)
 
  
  const choicePlanet = (e) =>{
    setPlanet(e.target.value)

  }

  return (
    <ThemeProvider theme={fonts}>
    <Container>
      <TitlePage>
      <span>01</span><p>PICK YOUR DESTINATION</p>
      </TitlePage>
      <Wrapper>
        <PlanetContainer>
          <img src={planets[planet]} alt={destination[planet].name} />
        </PlanetContainer>
        <ContentContainer>
        <Nav>
          <ul>
          <li value={0} onClick={choicePlanet}>MOON</li>
          <li value={1} onClick={choicePlanet}>MARS</li>
          <li value={2} onClick={choicePlanet}>EUROPA</li>
          <li value={3} onClick={choicePlanet}>TITAN</li>
          </ul>
        </Nav>
          <h1>{destination[planet].name}</h1>
           <p>S{destination[planet].description} </p>
          <InfoContainer>
            <div>
              <p>AVG. DISTANCE</p>
              <span>{destination[planet].distance}</span>
            </div>
            <div>
            <p>Est. travel time</p>
            <span>{destination[planet].travel}</span>
            </div>
          </InfoContainer>

        </ContentContainer>

      </Wrapper>
    </Container>

    </ThemeProvider>
  )
}

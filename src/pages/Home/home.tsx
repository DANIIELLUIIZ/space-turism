import { Container, Wrapper ,Content} from "./styles/styles";
import { ThemeProvider } from "styled-components";
import fonts from "./styles/homeTheme";

export default function Home() {
  return (
    <ThemeProvider theme={fonts}>
    <Container>
      <Wrapper>
        <Content>
          <span>SO, YOU WANT TO TRAVEL TO</span>
          <h1>SPACE</h1>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </Content>
        <button>EXPLORE</button>
      </Wrapper>
    </Container>

    </ThemeProvider>
  )
}

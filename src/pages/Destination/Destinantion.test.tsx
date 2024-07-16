import { render} from "@testing-library/react"
import Home from "./Destination"

test("sum", ()=>{

  const {getByText} = render(<Home/>)
   expect(getByText("SO, YOU WANT TO TRAVEL TO")).toBeTruthy()
 })
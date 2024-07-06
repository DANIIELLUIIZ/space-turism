
import { render} from "@testing-library/react"
import Header from "./Header"
test("sum", ()=>{
  const {findByText} = render(
      <Header/>
)

   expect(findByText("00")).toBeInTheDocument()
 })

 
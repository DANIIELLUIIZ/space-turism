
import {  render, fireEvent   } from "@testing-library/react"
import Header from "./Header"



describe("Test to verify the functionality of the mobile menu on the screen.",()=>{
  it("Should open the mobile menu when the button is pressed.", ()=>{
    const{ getByTestId, getByText} =  render(<Header/>)

    fireEvent.click(getByTestId("open-mobile-btn"))
    expect(getByText("TESTE")).toBeInTheDocument()


   })
   it("Should closed the mobile menu when the button is pressed.",()=>{

    const{ debug , getByTestId, getByText} =  render(<Header/>)
    fireEvent.click(getByTestId("open-mobile-btn"))
    debug()
    fireEvent.click(getByTestId("close-mobile-btn"))
    debug()

    expect(getByText("HOME")).not.toBe("TESTE")
   })
})

 

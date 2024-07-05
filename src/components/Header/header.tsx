import {Wrapper,Nav,Image,Ul} from "./styles"
import {Button} from "../Button/button"
import { IoMdMenu }  from "react-icons/io"
import Logo from "../../assets/shared/logo.svg"
export default function header() {
  return (
    <Wrapper>
     <Image src={Logo}/>
      <Nav>
        <Ul>
          <li><span>00</span> HOME </li>
          <li><span>01</span> DESTINATION </li>
          <li><span>02</span> CREW </li>
          <li><span>03</span> TECHNOLOGY </li>
        </Ul>

        <Button Icon={<IoMdMenu size={40}/>}/>
  
     </Nav>
    </Wrapper>
  )
}

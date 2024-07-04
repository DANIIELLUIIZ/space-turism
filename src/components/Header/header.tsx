import {Wrapper, Image ,Nav,Ul} from "./styles"
import {IoMdMenu}  from "react-icons/io";
import Logo from "../../assets/shared/logo.svg"
export default function header() {
  return (
    <Wrapper>
     <Image src={Logo}/>
     <Nav>
        <Ul>
          <li><span>00</span> HOME</li>
          <li><span>01</span> DESTINATION</li>
          <li><span>02</span> CREW</li>
          <li><span>03</span> TECHNOLOGY</li>
        </Ul>
        <IoMdMenu color="#FFFFFF" size={30} />
     </Nav>
    </Wrapper>
  )
}

import {Wrapper,Nav,Image,Ul} from "./styles"
import {Button} from "./MenuButton/button"
import { IoMdMenu }  from "react-icons/io"
import Logo from "../../assets/shared/logo.svg"
import AsideMenu from "../AsideMenu/AsideMenu"
import { useState } from "react"


export default function Header() {



  const [showMenu, setShowMenu] = useState(false);

  return (
    <Wrapper>
     <AsideMenu
     showMenu={showMenu}
     setShowMenu={setShowMenu}
     />
     <Image src={Logo}/>
      <Nav>
        <Ul>
          <li><span>00</span> HOME </li>
          <li><span>01</span> DESTINATION </li>
          <li><span>02</span> CREW </li>
          <li><span>03</span> TECHNOLOGY </li>
        </Ul>

       
  
     </Nav>
      {!showMenu ? <Button Icon={<IoMdMenu size={40} onClick={()=>{setShowMenu(true)}}/>} /> : null}
    </Wrapper>
  )
}

import {Wrapper,Nav,Ul} from "./styles"
import {Button} from "../Button/button"
import { IoMdMenu }  from "react-icons/io"
import Logo from "../Logo/Logo"
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
     <Logo/>
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

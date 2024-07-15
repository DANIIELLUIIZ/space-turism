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
      
     <Logo/>
      <Nav>
        <Ul>
          <li><a href="www.google.com"><span>00</span> HOME</a> </li>
          <li><a><span>01</span> DESTINATION</a> </li>
          <li><a><span>02</span> CREW</a> </li>
          <li><a><span>03</span> TECHNOLOGY</a> </li>
        </Ul>
     </Nav>

      {!showMenu ?   <Button onClick={()=>{setShowMenu(true) }} data="open-mobile-btn"  Icon={<IoMdMenu size={40}/>}/> :null }
      {showMenu ?  <AsideMenu
     showMenu={showMenu}
     setShowMenu={setShowMenu}
     />:null}
    </Wrapper>
  )
}

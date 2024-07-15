import {Nav,Ul} from "./styles"
import { Button } from "../Button/button"
import { MdClose } from "react-icons/md";
 

interface IAsideMenu {
  showMenu?:boolean;
  setShowMenu:React.Dispatch<React.SetStateAction<boolean>>;
  }
  
export interface INav{
  isVisible:React.ReactNode;
} 


export default function AsideMenu({showMenu, setShowMenu}:IAsideMenu) {
  
  return (
      <Nav 
      isVisible={showMenu}>
        <Ul>
          <li><a><span>00</span> HOME</a> </li>
          <li><a><span>01</span> DESTINATION</a> </li>
          <li><a><span>02</span> CREW</a> </li>
          <li><a><span>03</span> TECHNOLOGY</a> </li>
        </Ul>       
      
      <Button data="close-mobile-btn" onClick={()=>{setShowMenu(false)}} Icon={<MdClose size={40}/>}/>
     </Nav>
   
  )
}

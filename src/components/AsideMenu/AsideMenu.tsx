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
          <li><span>00</span> HOME </li>
          <li><span>01</span> DESTINATION </li>
          <li><span>02</span> CREW </li>
          <li><span>03</span> TECHNOLOGY </li>
        </Ul>       
      
      <Button data="close-mobile-btn" onClick={()=>{setShowMenu(false)}} Icon={<MdClose size={40}/>}/>
     </Nav>
   
  )
}

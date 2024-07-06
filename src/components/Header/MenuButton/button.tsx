import {Wrapper} from "./styles"


interface IButtonProps {
  Icon: JSX.Element; 
}
export const Button = ({ Icon }:IButtonProps) => {
  return (
    <Wrapper>
      {Icon} 
    </Wrapper>
  );
};

import {Wrapper} from "./styles"
interface IButtonProps {
  Icon: JSX.Element; 
}

export const Button: React.FC<IButtonProps> = ({ Icon }) => {
  return (
    <Wrapper>
      {Icon} 
    </Wrapper>
  );
};

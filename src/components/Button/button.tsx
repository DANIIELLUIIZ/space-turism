import {Wrapper} from "./styles"
interface IButtonProps {
  Icon?: JSX.Element 
  name?:string
  onClick?:()=>void
  data:string;
}

export const Button: React.FC<IButtonProps> = ({Icon, name,onClick,data}) => {
  return (
    <Wrapper className={name} onClick={onClick} data-testid={data}>
      {Icon}
    
    </Wrapper>
  );
};

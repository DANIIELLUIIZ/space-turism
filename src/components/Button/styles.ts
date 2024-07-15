import styled  from "styled-components";

export const Wrapper = styled.button`

cursor: pointer;
pointer-events: all;
display: none;
width: 40px;
height: 40px;
margin: 20px;

border: none;
margin-right: 10px;
background-color: transparent;
color: #FFF;

@media (max-width: 480px) {
  display: flex;
  justify-content: center;
  align-items: center;
}

`


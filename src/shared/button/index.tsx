import {ReactNode} from "react";
import {BigText} from "../../typography/text";
import styled from "styled-components";
import {Color} from "../../styles/colors";

interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
    disabled?: boolean
}

export const Button = ({onClick, children, disabled}: ButtonProps) => {
    return (
        <ButtonComponent disabled={disabled} onClick={onClick}>
            <ButtonText>
                {children}
            </ButtonText>
        </ButtonComponent>
    )
}

const ButtonText = styled(BigText)`
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 700;
`

const ButtonComponent = styled.button`
  width: max-content;
  border-radius: 30px;
  padding: 10px 24px 6px;

  background: ${Color.Alt};

  &:hover{
    background: ${Color.AltHover};
  }
  
  &:disabled{
    opacity: 0.5;
  }
`
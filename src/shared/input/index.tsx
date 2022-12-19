import styled from "styled-components";
import {Color} from "../../styles/colors";
import {BaseSyntheticEvent, useState} from "react";
import {ColumnFlexWithPadding} from "../../typography/flex";
import {HeaderSmall} from "../../typography/text";
import {createId} from "../../utils/create-id";

interface InputProps {
    value: string,
    onChange: (event: BaseSyntheticEvent) => void,
    label?: string
}

export const Input = ({value, onChange, label}: InputProps) => {
    const [id] = useState<string>(createId('input'))

    return (
        <ColumnFlexWithPadding spacing={'8px'}>
            <Label htmlFor={id}>
                <HeaderSmall>
                    {label}
                </HeaderSmall>
            </Label>
            <InputComponent id={id} value={value} onChange={onChange}/>
        </ColumnFlexWithPadding>
    )
}

const InputComponent = styled.input`
  padding: 12px 18px;

  border: 1px solid ${Color.Main};
  border-radius: 30px;

  color: rgba(256, 256, 267, 0.5);

  &:hover {
    border: 1px solid ${Color.Alt};
  }

  &:disabled {
    opacity: 0.5;
  }
`

const Label = styled.label``
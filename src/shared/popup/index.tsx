import React, {ReactNode} from 'react';
import {Portal} from '../portal';
import styled from "styled-components";
import {Color} from "../../styles/colors";

interface PopupProps {
    children: ReactNode;
    id?: string;
}

export const Popup = (
    {
        children,
        id,
    }: PopupProps) => {

    return (
        <Portal id={id}>
            <PopupPortal>
            <PopupBackdrop/>
            <PopupBody>
                {children}
            </PopupBody>
            </PopupPortal>
        </Portal>
    );
};

const PopupPortal = styled.div`
  z-index: 100;
`

const PopupBody = styled.div`
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  background: ${Color.AltBackground};
  z-index: 100;
`

const PopupBackdrop = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  background: rgba(23, 23, 23, 0.81);
  z-index: 99;
`
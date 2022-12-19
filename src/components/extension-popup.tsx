import {Button, Popup} from "../shared";
import {ColumnCenteredFlexWithPadding} from "../typography/flex";
import {SmallTitle, Text} from "../typography/text";
import {Color} from "../styles/colors";
import styled from "styled-components";
import {useEthers} from "@usedapp/core";

interface ExtensionPopupProps {
    onClose: () => void
}

export const ExtensionPopup = (props: ExtensionPopupProps) => {
    const { activateBrowserWallet } = useEthers()

    const onSkipStep = () => {
        props.onClose()
    }

    const onClick = ()=>{
        activateBrowserWallet()
    }


    return (
        <Popup>
            <PopupBody spacing={'60px'}>
                <ColumnCenteredFlexWithPadding spacing={'30px'}>
                    <SmallTitle color={Color.Alt}>Metamask extension</SmallTitle>
                    <ExtensionText>
                        To work with our application, you have to install the <Link onClick={onClick}>Metamask browser extension</Link>
                    </ExtensionText>
                </ColumnCenteredFlexWithPadding>
                <Button onClick={onSkipStep}>
                    Skip this step
                </Button>
            </PopupBody>
        </Popup>
    )
}

const Link = styled.a`
  font-family: "Avenir Next Cyr", sans-serif;
  color: ${Color.Alt}
`

const PopupBody = styled(ColumnCenteredFlexWithPadding)`
  padding: 46px 50px 43px;
`

const ExtensionText = styled(Text)`
  width: 320px;
`
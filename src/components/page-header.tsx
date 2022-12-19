import {HorizontallyCenteredFlexWithSpaceBetween} from "../typography/flex";
import {Button} from "../shared";
import styled from "styled-components";
import {BigText} from "../typography/text";
import {Color} from "../styles/colors";
import {useEthers} from "@usedapp/core";

export const PageHeader = () => {

    const { activateBrowserWallet, account } = useEthers()

    const onClick = () => {
        activateBrowserWallet()
    }
    return <HorizontallyCenteredFlexWithSpaceBetween style={{position:'relative'}}>
        <Logo/>
        <div>
            {account ?
                <AccountTextContainer>
                    {/*<AcctountText color={Color.Alt} >*/}
                        {account}
                    {/*</AcctountText>*/}
                </AccountTextContainer>
                :
                <Button onClick={onClick}>
                    CONNECT METAMASK
                </Button>
            }

        </div>
    </HorizontallyCenteredFlexWithSpaceBetween>
}



const AccountTextContainer = styled.div`
  width: 145px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${Color.Alt};
  font-weight: 700;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 18px;
`

const Logo = () => {
    return <LogoComponent><LogoText>LOGO</LogoText></LogoComponent>
}

const LogoText =styled(BigText)`
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 700;
`

const LogoComponent = styled.div`
  background: #5A5A5A;
  border: 1px dashed #C7C7C7;
  padding: 12px 86px;
`
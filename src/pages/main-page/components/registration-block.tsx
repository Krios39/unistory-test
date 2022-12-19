import {ColumnFlexWithPadding} from "../../../typography/flex";
import {HeaderBig, HeaderSmall, SmallTitle, Text} from "../../../typography/text";
import {Color} from "../../../styles/colors";
import {Input, Button} from "../../../shared";
import styled from "styled-components";
import {useState} from "react";
import {Wallet} from "../../../models/wallet";
import {useEthers} from "@usedapp/core";

interface RegistrationBlockProps {
    registeredWallet?: Wallet
    onRegistrationSubmit: (name: string, email: string, address: string) => void
}

export const RegistrationBlock = (props: RegistrationBlockProps) => {

    const onRegistrationFormSubmit = (name: string, email: string, address: string) => {
        props.onRegistrationSubmit(name, email, address)
    }

    return (
        <FormComponent spacing={'36px'}>
            <ColumnFlexWithPadding spacing={'18px'}>
                <SmallTitle color={Color.Alt}>BETA TEST REGISTRATION</SmallTitle>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </Text>
            </ColumnFlexWithPadding>

            {props.registeredWallet ?
                <RegisteredInfo wallet={props.registeredWallet}/> :
                <RegistrationForm onFormSubmit={onRegistrationFormSubmit}/>
            }
        </FormComponent>)
}


interface RegistrationFormProps {
    onFormSubmit: (name: string, email: string, address: string) => void
}

const RegistrationForm = (props: RegistrationFormProps) => {
    const {account} = useEthers()

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const onGetAccessClick = () => {
        if (account) {
            props.onFormSubmit(name.trim(), email.trim(), account)
        }
    }

    return (
        <ColumnFlexWithPadding spacing={'24px'}>
            <ColumnFlexWithPadding spacing={'18px'}>
                <Input label={'NAME'} value={name} onChange={(e) => setName(e.target.value)}/>
                <Input label={'EMAIL'} value={email} onChange={(e) => setEmail(e.target.value)}/>
            </ColumnFlexWithPadding>

            <Button disabled={!account || !email || !name} onClick={onGetAccessClick}>
                Get early access
            </Button>
        </ColumnFlexWithPadding>

    )
}

interface RegisteredInfoProps {
    wallet: Wallet
}

const RegisteredInfo = (props: RegisteredInfoProps) => {

    const onListMeClick = () => {
    }

    return (
        <ColumnFlexWithPadding spacing={'28px'}>
            <ColumnFlexWithPadding spacing={'22px'}>
                <ColumnFlexWithPadding spacing={'8px'}>
                    <HeaderSmall>NAME</HeaderSmall>
                    <HeaderBig color={Color.Alt}>{props.wallet.username}</HeaderBig>
                </ColumnFlexWithPadding>
                <ColumnFlexWithPadding spacing={'8px'}>
                    <HeaderSmall>EMAIL</HeaderSmall>
                    <HeaderBig color={Color.Alt}>{props.wallet.email}</HeaderBig>
                </ColumnFlexWithPadding>
            </ColumnFlexWithPadding>
            <Button onClick={onListMeClick}>LIST ME TO THE TABLE</Button>
        </ColumnFlexWithPadding>
    )
}

const FormComponent = styled(ColumnFlexWithPadding)`
  width: 420px;
`


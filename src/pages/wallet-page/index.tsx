import {Color} from "../../styles/colors";
import {HeaderBig, HeaderSmall, Title} from "../../typography/text";
import {
    ColumnFlexWithPadding,
} from "../../typography/flex";
import {Page} from "../../shared";
import {PageHeader} from "../../components/page-header";
import {BackgroundPlanet} from "../main-page/components/background-planet";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {WalletsService} from "../../services/wallets.service";
import {Wallet} from "../../models/wallet";

export const WalletPage = () => {

    const params = useParams()

    const [wallet, setWallet] = useState<Wallet | undefined>(undefined)

    useEffect(() => {
        const id = params?.id
        if (id && !isNaN(+id)) {
            WalletsService.getWalletById(+id).then(data => setWallet(data))

        }
    }, [])

    return (
        <Page>
            <ColumnFlexWithPadding spacing={'110px'}>
                <PageHeader/>
                <ColumnFlexWithPadding spacing={'46px'}>
                    <Title>Personal data</Title>
                    <ColumnFlexWithPadding spacing={'22px'}>
                        <ColumnFlexWithPadding spacing={'8px'}>
                            <HeaderSmall>NAME</HeaderSmall>
                            <HeaderBig color={Color.Alt}>{wallet?.username}</HeaderBig>
                        </ColumnFlexWithPadding>
                        <ColumnFlexWithPadding spacing={'8px'}>
                            <HeaderSmall>EMAIL</HeaderSmall>
                            <HeaderBig color={Color.Alt}>{wallet?.email}</HeaderBig>
                        </ColumnFlexWithPadding>
                        <ColumnFlexWithPadding spacing={'8px'}>
                            <HeaderSmall>ADDRESS</HeaderSmall>
                            <HeaderBig color={Color.Alt}>{wallet?.address}</HeaderBig>
                        </ColumnFlexWithPadding>
                    </ColumnFlexWithPadding>

                </ColumnFlexWithPadding>
            </ColumnFlexWithPadding>


            <PlannedBacl/>

        </Page>
    )
}


const PlannedBacl = styled(BackgroundPlanet)`
  right: -100px;
  top: 200px;
  left: unset;
`
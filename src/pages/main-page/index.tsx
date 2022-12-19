import {ColumnFlexWithPadding, HorizontallyCenteredFlexWithSpaceBetween} from "../../typography/flex";
import {Page} from "../../shared";
import {WalletsTable} from "./components/wallets-table";
import {RegistrationBlock} from "./components/registration-block";
import {memo, useEffect, useState} from "react";
import {Wallet} from "../../models/wallet";
import styled from "styled-components";
import {PageHeader} from "../../components/page-header";
import {Info} from "./components/info";
import {useEthers} from "@usedapp/core";
import {WalletMeta, WalletsService} from "../../services/wallets.service";

export const MainPage = memo(() => {
    const {account} = useEthers()
    const [walletsMeta, setWalletsMeta] = useState<WalletMeta>({currentPage: 1, perPage: 50, totalPages: 0})
    const [error, setError] = useState<any>(undefined)
    const [wallets, setWallets] = useState<Wallet[]>([])
    const [isRegisted, setIsRegisted] = useState(false)


    useEffect(() => {
        if (!error) {
            WalletsService.getWallets(walletsMeta?.currentPage || 1, walletsMeta?.perPage || 50).then(data => {
                    setWallets(prevState => prevState.concat(data?.items))
                    setWalletsMeta(data?.meta)
                }
            )
        }
    }, [error, walletsMeta?.currentPage, walletsMeta?.perPage])


    const addWallet = (user: string, email: string, address: string) => {
        setWallets(prevState => {
            const newWalletsArray = prevState.slice()
            newWalletsArray.unshift({
                username: user,
                email,
                address,
                id: (walletsMeta?.totalPages || 0) * (walletsMeta?.perPage || 0) + 1
            })
            return newWalletsArray
        })
        setIsRegisted(true)
    }

    const deleteOwnWallet = () => {
        setWallets(prevState => prevState.filter(wallet => wallet.address !== account))
    }

    const dataUpdate = () => {
        if (walletsMeta.totalPages > walletsMeta.currentPage) {
            setError(undefined)
            setWalletsMeta(prevState => ({...prevState, currentPage: prevState.currentPage + 1}))
        }
    }

    return (
        <Page>
            <ColumnFlexWithPadding spacing={'202px'}>
                <PageHeader/>
                <ColumnFlexWithPadding spacing={'108px'}>
                    <Info/>
                    <PageFooter>
                        <RegistrationBlock registeredWallet={wallets.find(wallet => wallet.address === account)}
                                           onRegistrationSubmit={addWallet}/>
                        {isRegisted && <WalletsTable onDataUpdate={dataUpdate} wallets={wallets}
                                                     onDeleteIconClick={deleteOwnWallet}/>}
                    </PageFooter>
                </ColumnFlexWithPadding>

            </ColumnFlexWithPadding>

        </Page>
    )
})

const PageFooter = styled(HorizontallyCenteredFlexWithSpaceBetween)`
  align-items: flex-start;
`
import {ColumnFlexWithPadding} from "../../../typography/flex";
import {SmallText, SmallTitle} from "../../../typography/text";
import {Table} from "../../../shared";
import {Wallet} from "../../../models/wallet";
import styled from "styled-components";
import {memo, SyntheticEvent} from "react";
import {useEthers} from "@usedapp/core";
import history from "../../../history";
import {Row} from "react-table";

interface WalletsTableProps {
    wallets: Wallet[]

    onDeleteIconClick: () => void
    onDataUpdate:()=>void
}

export const WalletsTable = memo((props: WalletsTableProps) => {
        const {account} = useEthers()

        const onDeleteIconClick = (e: SyntheticEvent) => {
            e.stopPropagation()
            props.onDeleteIconClick()
        }

        const columns = [
            {
                id: 'USERNAME',
                Header: 'username',
                accessor: 'username',

            },
            {
                id: 'EMAIL',
                Header: 'email',
                accessor: 'email'
            },
            {
                id: 'WALLET',
                Header: 'address',
                Cell: ({row}: any) => {
                    const data: Wallet = row.original as Wallet
                    return (
                        <div className={'address'}>
                            <SmallText>
                                {data.address}
                            </SmallText>
                        </div>)
                }

            },
            {
                id: 'icon',
                Header: '',
                Cell: ({row}: any) => {
                    const data: Wallet = row.original as Wallet
                    const showCloseIcon = data.address === account
                    return (
                        <IconCell className={'icon'}>
                            {showCloseIcon && <Image onClick={onDeleteIconClick} src="/close-icon.svg" alt=""/>}
                        </IconCell>)
                }
            }
        ]

        const selectRowCondition = (rowData: any) =>
            rowData.address === account

        const onRowClick = (row: Row<any>) => {
            const wallet = row.original as Wallet
            if (wallet.address !== account) {
                history.push(`/${wallet.id}`)
            }
        }

        return (
            <TableComponent spacing={'36px'}>
                <SmallTitle>
                    Participation listing (enable only for participants)
                </SmallTitle>
                <CustomTable data={props.wallets} columns={columns}
                             rowSelectionCondition={selectRowCondition} onRowClick={onRowClick}
                    dataUpdateCondition={position=> position.scrollHeight-(position.scrollTop+position.clientHeight)===0}
                    onDataUpdate={props.onDataUpdate}
                />
            </TableComponent>
        )
    }
)

const Image = styled.img`
  cursor: pointer;
`

const IconCell = styled.div`
  height: 15px;
  width: 15px;
`

const CustomTable = styled(Table)`
  td {
    :not(:last-child) {
      min-width: 190px;
    }
  }

  .address {
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: 20px;
  }
`

const TableComponent = styled(ColumnFlexWithPadding)`
  width: 700px;
`
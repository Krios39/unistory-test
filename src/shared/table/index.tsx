import {Column, useTable, Row} from 'react-table'
import {HeaderSmall, SmallText} from "../../typography/text";
import styled from "styled-components";
import {Color} from "../../styles/colors";
import {Scrollbar} from "../scrollbar";
import {positionValues} from "react-custom-scrollbars-2";
import {useState} from "react";

interface TableProps<T extends object> {
    data: T[],
    columns: Column<T>[],
    className?: string,
    rowSelectionCondition?: (rowData: T) => boolean | undefined,

    onRowClick?: (row: Row<T>) => void,

    dataUpdateCondition?: (position: positionValues) => boolean

    onDataUpdate?: () => void
}


const TOLERANCE_ROW_COUNT = 3
export const Table = <T extends object>(props: TableProps<T>) => {
    const {headers, rows, prepareRow} = useTable({data: props.data, columns: props.columns})
    const rowHeight = 52

    const [showedRowsIndexes, setShowedRowsIndexes] = useState<{ start: number; end: number }>({start: 0, end: 10});

    const getShowedRowsIndexes = (scrollTop: number, count: number, tableHeight: number): { start: number; end: number } => {
        let sum = 0;
        let start = sum;
        let end = sum;
        let topRowCounter = 0;
        let bottomRowCounter = 0;


        for (topRowCounter; topRowCounter < count; topRowCounter++) {
            if (sum + rowHeight > scrollTop) {
                start = topRowCounter - TOLERANCE_ROW_COUNT < 0 ? 0 : topRowCounter - TOLERANCE_ROW_COUNT;
                bottomRowCounter = topRowCounter;
                sum = 0;
                break;
            } else sum += rowHeight;
        }

        for (bottomRowCounter; bottomRowCounter < count; bottomRowCounter++) {
            if (sum + rowHeight > tableHeight) {
                end = bottomRowCounter + TOLERANCE_ROW_COUNT >= count ? count : bottomRowCounter + TOLERANCE_ROW_COUNT;
                break;
            } else sum += rowHeight;
        }

        return {start, end};
    };


    const onRowClick = (row: Row<T>) => {
        props.onRowClick?.(row)
    }

    const onScrollFrame = (position: positionValues) => {
        setShowedRowsIndexes(getShowedRowsIndexes(position.scrollTop, props.data.length, position.clientHeight));

        if (props.dataUpdateCondition?.(position)) {
            props.onDataUpdate?.()
        }
    }

    return (
        <Scrollbar onScrollFrame={onScrollFrame}>
            <CustomTable className={props.className}>

                <thead>
                <HeadRow>
                    {headers.map(header => (
                        <Head key={header.id}>
                            <HeaderSmall>
                                {header.render('Header')}
                            </HeaderSmall>
                        </Head>
                    ))}
                </HeadRow>
                </thead>


                <tbody>
                <TableRow style={{height: showedRowsIndexes.start * rowHeight}}/>

                {rows.map((row, index) => {
                        if (showedRowsIndexes.start !== 0 && (index <= showedRowsIndexes.start || index >= showedRowsIndexes.end)) return null;

                        prepareRow(row)
                        return (
                            <TableRow onClick={() => onRowClick(row)} selected={props.rowSelectionCondition?.(row.original)}
                                      key={index}>
                                {row.cells.map(cell =>
                                    <Data key={cell.getCellProps().key} className={cell.getCellProps().className}>
                                        <SmallText>
                                            {cell.render('Cell')}
                                        </SmallText>
                                    </Data>
                                )}
                            </TableRow>
                        )
                    }
                )}
                <TableRow style={{height: (props.data.length - showedRowsIndexes.end) * rowHeight}}/>

                </tbody>
            </CustomTable>

        </Scrollbar>

    )
}

const CustomTable = styled.table`
  color: ${Color.Main};
  border-collapse: collapse;
  text-align: left;
`

const TableRow = styled.tr<{ selected?: boolean }>`
  border-bottom: 1px solid ${Color.Main};
  ${({selected}) => selected && `cursor: not-allowed`};


  span {
    ${({selected}) => selected && `color: ${Color.Alt} !important`};
  }
`

const Data = styled.td`
  padding: 16px 0;
`

const Head = styled.th`
  padding: 0 0 16px;
`

const HeadRow = styled(TableRow)`
  position: sticky;
  background: ${Color.Background};
  top: 0;
`
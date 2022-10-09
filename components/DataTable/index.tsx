import * as React from 'react';

// -------*********-----------//
import {
    Paper,
    Table, TableBody,
    TableContainer,
    TableHead,
    TablePagination
} from '@mui/material'


// -------*********-----------//
import { post } from '../../types';
import { Row, TableHeader } from './Components'
import { columns } from '../../interface';


// ------------****-------------
import { useWindowDimensions } from '../../hooks';

interface propsType {
    posts: post[],
    
}


export default function StickyHeadTable(props: propsType) {


    const rows = props?.posts

    const { height, width } = useWindowDimensions();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: (height - 150) }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead sx={{
                        backgroundColor:'red'
                    }}>
                        <TableHeader columns={columns} />
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <Row row={row} />
                                )
                            })}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                style={{
                    height: 50,
                    backgroundColor:'#ffe8d6'
                }}
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
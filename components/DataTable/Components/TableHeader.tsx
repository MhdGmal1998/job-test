import React from "react";
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { column } from "../../../types";

interface propsType {
    columns: column[]
}
const TableHeader = (props: propsType) => {
    return (
        <TableRow>
            {props?.columns?.map((column) => (
                <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                >
                    {column.label}
                </TableCell>
            ))}
        </TableRow>
    )
}
export default TableHeader
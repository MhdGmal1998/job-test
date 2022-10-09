import React from "react";
import { TableRow, TableCell, Button } from '@mui/material'
import Link from "next/link"

interface ControlBtnPropsType {
    type?: 'view' | 'delete' | 'edit',
    id: number,
    children: React.ReactNode,
}

interface propsType {
    row: {
        id: number,
        title: string
    }
}
const ControlBtn = (props: ControlBtnPropsType) => {

    var { type, id } = props

    var url = ''
    var color = undefined
    var variant = "outlined"
    if (type == 'view') {
        url = `/post/${id}`
        color = 'success'
    }
    else if (type == 'delete') {
        url = `/delete/${id}`
        color = 'error'

    }
    else if (type == 'edit') {
        url = `/edit/${id}`
        variant = 'contained'
        color = 'secondary'
    }
    else {
        return (
            <Button variant="contained" color="error">
                Error
            </Button>
        )
    }

    return (
        <TableCell>
            <Link href={url}>
                <Button variant={variant} color={color}>
                    {props?.children}
                </Button>
            </Link>
        </TableCell>
    )
}



export default (props: propsType) => {
    const { row } = props
    return (
        // <Fade bottom duration={1000} style={{ outerWidth: '100%' }}>
            <TableRow hover role="checkbox" key={row.id}>
                <TableCell>
                    {row.id}
                </TableCell>
                <TableCell>
                    {row.title}
                </TableCell>
                <ControlBtn type="view" id={row.id}>
                    View
                </ControlBtn>
                <ControlBtn type="edit" id={row.id}>
                    Edit
                </ControlBtn>
                <ControlBtn type="delete" id={row.id}>
                    Delete
                </ControlBtn>
            </TableRow >
        // </Fade>
    )
}
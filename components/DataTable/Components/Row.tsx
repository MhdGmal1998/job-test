import React from "react";
import { TableRow, TableCell, Button } from '@mui/material'
import Link from "next/link"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditPostModal from '../../Modals/EditPostModal';
import { DeletePostModal } from "../../Modals";
import { post } from "../../../types";
interface ControlBtnPropsType {
    type?: 'view' | 'delete' | 'edit',
    id: number,

    children: React.ReactNode,
    onClick?: () => void
}

interface propsType {
    row: post
}
type variantType = "outlined" | "contained" | "text" | undefined
type colorType = "success" | "error" | "secondary" | "inherit" | "primary" | "info" | "warning" | undefined
const ControlBtn = (props: ControlBtnPropsType) => {

    var { type, id } = props
    var url = ''
    var color: colorType = 'success'
    var variant: variantType = "outlined"
    if (type == 'view') {
        url = `/post/${id}`
        color = 'success'
    }
    else if (type == 'delete') {
        color = 'error'

    }
    else if (type == 'edit') {
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
            {
                type == 'view' ?
                    <Link href={url}>
                        <Button variant={variant} color={color}>
                            {props?.children}
                        </Button>
                    </Link> :
                    <Button variant={variant} color={color} onClick={props.onClick}>
                        {props?.children}
                    </Button>
            }
        </TableCell>
    )
}



const Row = (props: propsType) => {
    const { row } = props

    const handleEdit = () => EditPostModal(row.id, row.title, row.body, row.userId)
    const handleDelete = () => DeletePostModal(row.id)
    return (
        <TableRow hover role="checkbox" key={row.id}>
            <TableCell>
                {row.id}
            </TableCell>
            <TableCell>
                {row.title}
            </TableCell>
            <ControlBtn type="view" id={row.id}>
                <RemoveRedEyeIcon />
            </ControlBtn>
            <ControlBtn type="edit" id={row.id} onClick={handleEdit}>
                <EditIcon />
            </ControlBtn>
            <ControlBtn type="delete" id={row.id} onClick={handleDelete}>
                <DeleteIcon />
            </ControlBtn>
        </TableRow >
    )
}

export default Row
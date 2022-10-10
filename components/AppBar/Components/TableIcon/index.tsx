import TableViewIcon from '@mui/icons-material/TableView';
import { IconButton, ListItemButton, ListItemText, ListItem } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import { CardDirect, DataTableDirect } from '../../../../interface';
import { useTheme } from '@mui/material/styles';
import ListItemIcon from '../ListItemComponent';

const CardIcon = (props) => {
    const theme = useTheme()
    const { type } = props
    return (
        type == "appbar" ?
            <Link href={DataTableDirect}>
                <TableViewIcon sx={{ color: 'white' }} />
            </Link>
            :
            <Link href={DataTableDirect}>
                <ListItem>
                    <ListItemIcon>
                        <ListItemText sx={{ textAlign: 'center' }}>
                            <IconButton >
                                <TableViewIcon sx={{ color: 'white' }} />
                            </IconButton>
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>
            </Link>
    )
}
export default CardIcon
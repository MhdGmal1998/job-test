import TableViewIcon from '@mui/icons-material/TableView';
import { IconButton, ListItemButton, ListItemText, ListItem } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import { CardDirect, DataTableDirect } from '../../../../interface';
import { useTheme } from '@mui/material/styles';

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
                    <ListItemButton sx={{ backgroundColor: theme.palette.primary.main, mr: 2, borderRadius: 2 }}>
                        <ListItemText>
                            <IconButton >
                                <TableViewIcon sx={{ color: 'white' }} />
                            </IconButton>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </Link>
    )
}
export default CardIcon
import { IconButton, ListItemButton, ListItemText, ListItem } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import GridViewIcon from '@mui/icons-material/GridView';
import { CardDirect } from '../../../../interface';
import { useTheme } from '@mui/material/styles';
import ListItemIcon from '../ListItemComponent';
const CardIcon = (props) => {
    const { type } = props
    const theme = useTheme()
    return (
        type == "appbar" ?
            <Link href={CardDirect}>
                <GridViewIcon sx={{ color: 'white' }} />
            </Link>
            :
            <Link href={CardDirect}>
                <ListItem>
                    <ListItemIcon>
                        <ListItemText sx={{ textAlign: 'center' }}>
                            <IconButton >
                                <GridViewIcon sx={{ color: 'white' }} />
                            </IconButton>
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>
            </Link>
    )
}
export default CardIcon
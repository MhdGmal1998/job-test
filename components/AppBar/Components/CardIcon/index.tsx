import { IconButton, ListItemButton, ListItemText, ListItem } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import GridViewIcon from '@mui/icons-material/GridView';
import { CardDirect } from '../../../../interface';
import { useTheme } from '@mui/material/styles';
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
                    <ListItemButton sx={{ backgroundColor: theme.palette.primary.main, mr: 2, borderRadius: 2 }}>
                        <ListItemText>
                            <IconButton >
                                <GridViewIcon sx={{ color: 'white' }} />
                            </IconButton>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </Link>
    )
}
export default CardIcon
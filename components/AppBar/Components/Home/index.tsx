import { IconButton, ListItemButton, ListItemText, ListItem } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import GridViewIcon from '@mui/icons-material/GridView';
import { CardDirect } from '../../../../interface';
import { useTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import ListItemIcon from '../ListItemComponent';
const Home = (props) => {
    const { type } = props
    const theme = useTheme()
    return (
        type == "appbar" ?
            <Link href='/'>
                <HomeIcon sx={{ color: 'white' }} />
            </Link>
            :
            <Link href='/'>
                <ListItem>
                    <ListItemIcon>
                        <ListItemText sx={{ textAlign: 'center' }}>
                            <IconButton >
                                <HomeIcon sx={{ color: 'white' }} />
                            </IconButton>
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>
            </Link>
    )
}
export default Home
import React from 'react'
import { IconButton, ListItemButton, ListItemText } from '@mui/material'
import { Fade as Humbergur } from 'hamburger-react'
import ListItem from '@mui/material/ListItem';
import { useTheme, styled } from '@mui/material/styles';
import ListItemIcon from '../ListItemComponent';

const HamburgerIcon = () => {

    const theme = useTheme()
    return (
        <ListItem>
            <ListItemIcon>
                <ListItemText sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Humbergur toggled={true} color="white" />
                </ListItemText>
            </ListItemIcon>
        </ListItem>
    )
}

export default HamburgerIcon
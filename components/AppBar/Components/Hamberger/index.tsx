import React from 'react'
import { IconButton, ListItemButton, ListItemText } from '@mui/material'
import { Fade as Humbergur } from 'hamburger-react'
import ListItem from '@mui/material/ListItem';
import { useTheme, styled } from '@mui/material/styles';

const HamburgerIcon = () => {

    const theme = useTheme()
    return (
        <ListItem>
            <ListItemButton sx={{ backgroundColor: theme.palette.primary.main, mr: 2, borderRadius: 2 }}>
                <ListItemText>
                   
                        <Humbergur toggled={true}  color="white"/>
                    
                </ListItemText>
            </ListItemButton>
        </ListItem>
    )
}

export default HamburgerIcon
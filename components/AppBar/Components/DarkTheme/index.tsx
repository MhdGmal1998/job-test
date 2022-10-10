import React from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { AppContext } from '../../../../context/provider';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { IconButton, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';
const DarkTheme = (props) => {
    const { type } = props
    const { toggleTheme, setToggleTheme } = React.useContext(AppContext)
    const handleTheme = () => setToggleTheme?.()
    const theme = useTheme()
    return (
        type == "appbar" ?
            <IconButton onClick={handleTheme}>
                {toggleTheme ? <NightlightIcon sx={{ color: 'white' }} /> : <WbSunnyIcon sx={{ color: 'yellow' }} />}
            </IconButton> :
            <ListItem onClick={handleTheme}>
                <ListItemButton sx={{ backgroundColor: theme.palette.primary.main, mr: 2, borderRadius: 2 }}>
                    <ListItemText>
                        <IconButton >
                            {toggleTheme ? <NightlightIcon sx={{ color: 'white' }} /> : <WbSunnyIcon sx={{ color: 'yellow' }} />}
                        </IconButton>
                    </ListItemText>
                </ListItemButton>
            </ListItem>
    )
}
export default DarkTheme
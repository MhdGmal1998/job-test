import React from 'react'
import FormatTextdirectionRToLIcon from '@mui/icons-material/FormatTextdirectionRToL';
import FormatTextdirectionLToRIcon from '@mui/icons-material/FormatTextdirectionLToR';
import { IconButton, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { AppContext } from '../../../../context/provider';
import { useTheme } from '@mui/material/styles';
const FontDirection = (props) => {
    const { type } = props
    const { dir, setAppDirection } = React.useContext(AppContext)
    const handleFontDirection = () => setAppDirection?.()
    const theme = useTheme()
    return (
        type == "appbar" ?
            <IconButton onClick={handleFontDirection}>
                {dir == 'rtl' ? <FormatTextdirectionLToRIcon sx={{ color: 'white' }} /> : <FormatTextdirectionRToLIcon sx={{ color: 'white' }} />}
            </IconButton> :
            <ListItem onClick={handleFontDirection}>
                <ListItemButton sx={{ backgroundColor: theme.palette.primary.main, mr: 2, borderRadius: 2 }}>
                    <ListItemText>
                        <IconButton >
                            {dir == 'rtl' ? <FormatTextdirectionLToRIcon sx={{ color: 'white' }} /> : <FormatTextdirectionRToLIcon sx={{ color: 'white' }} />}
                        </IconButton>
                    </ListItemText>
                </ListItemButton>
            </ListItem>
    )
}
export default FontDirection
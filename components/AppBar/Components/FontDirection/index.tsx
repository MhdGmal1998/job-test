import React from 'react'
import FormatTextdirectionRToLIcon from '@mui/icons-material/FormatTextdirectionRToL';
import FormatTextdirectionLToRIcon from '@mui/icons-material/FormatTextdirectionLToR';
import { IconButton, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { AppContext } from '../../../../context/provider';
import { useTheme } from '@mui/material/styles';
import ListItemComponent from '../ListItemComponent'
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
                <ListItemComponent>
                    <ListItemText sx={{ textAlign: 'center' }}>
                        <IconButton >
                            {dir == 'rtl' ? <FormatTextdirectionLToRIcon sx={{ color: 'white' }} /> : <FormatTextdirectionRToLIcon sx={{ color: 'white' }} />}
                        </IconButton>
                    </ListItemText>
                </ListItemComponent>
            </ListItem >
    )
}
export default FontDirection
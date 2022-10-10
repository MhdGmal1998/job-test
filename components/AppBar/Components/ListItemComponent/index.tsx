import React from 'react';
import { ListItemButton } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import { AppContext } from '../../../../context/provider';

const ListItemIcon = ({ children }) => {
    const theme = useTheme()

    const { toggleTheme } = React.useContext(AppContext)
    return (
        <ListItemButton
            sx={
                !toggleTheme ? {
                    backgroundColor: theme.palette.primary.main, mr: 2, borderRadius: 2,

                } : {
                    backgroundColor: theme.palette.primary.main, mr: 2, borderRadius: 2,
                    "&:hover": {
                        backgroundColor: '#22577a',
                    }
                }


            }>
            {children}
        </ListItemButton >
    )
}

export default ListItemIcon
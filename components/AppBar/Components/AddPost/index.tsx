import { IconButton, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import { AddPostModal } from '../../../Modals';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListItem from '@mui/material/ListItem';
import { useTheme } from '@mui/material/styles';
const AddPostIcon = (props) => {
    const { type } = props

    const theme = useTheme()
    return (
        type == "appbar" ?
            <IconButton onClick={() => AddPostModal()}>
                <AddCircleIcon sx={{ color: 'white' }} />
            </IconButton>
            :
            <ListItem onClick={() => AddPostModal()}>
                <ListItemButton sx={{ backgroundColor: theme.palette.primary.main, mr: 2, borderRadius: 2 }}>
                    <ListItemText>
                        <IconButton >
                            <AddCircleIcon sx={{ color: 'white' }} />
                        </IconButton>
                    </ListItemText>
                </ListItemButton>
            </ListItem>
    )
}
export default AddPostIcon
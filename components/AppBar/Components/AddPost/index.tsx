import { IconButton, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import { AddPostModal } from '../../../Modals';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListItem from '@mui/material/ListItem';
import { useTheme } from '@mui/material/styles';
import ListItemIcon from '../ListItemComponent';
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
                <ListItemIcon>
                    <ListItemText sx={{ textAlign: 'center' }}>
                        <IconButton >
                            <AddCircleIcon sx={{ color: 'white' }} />
                        </IconButton>
                    </ListItemText>
                </ListItemIcon>
            </ListItem>
    )
}
export default AddPostIcon
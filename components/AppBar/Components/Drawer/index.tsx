import React from 'react'
import AddPost from '../AddPost'
import DarkTheme from '../DarkTheme'
import FontDirection from '../FontDirection'
import TableIcon from '../TableIcon'
import CardIcon from '../CardIcon'
import Home from '../Home'
import { Box } from '@mui/system'
const Drawer = (props) => {
    const { handleDrawerToggle } = props
    return (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <AddPost />
            <DarkTheme />
            <FontDirection />
            <TableIcon />
            <CardIcon />
            <Home />
        </Box>
    )
}
export default Drawer
import React from 'react'
import AddPost from '../AddPost'
import DarkTheme from '../DarkTheme'
import FontDirection from '../FontDirection'
import TableIcon from '../TableIcon'
import CardIcon from '../CardIcon'
import Home from '../Home'
import { Box } from '@mui/system'
import { Fade as Hamburger } from 'hamburger-react'
import HamburgerIcon from '../Hamberger'

const Drawer = (props) => {
    const { handleDrawerToggle } = props
    return (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <HamburgerIcon />
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
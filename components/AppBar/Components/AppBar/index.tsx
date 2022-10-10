import React from 'react'
import { Toolbar, IconButton, AppBar, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddPost from '../AddPost'
import DarkTheme from '../DarkTheme'
import FontDirection from '../FontDirection'
import TableIcon from '../TableIcon'
import CardIcon from '../CardIcon'
import Home from '../Home';
const ToolbarComponent = (props) => {
    const { handleDrawerToggle } = props
    return (
        <AppBar component="nav">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>

                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                    <IconButton>
                        <AddPost type="appbar" />
                    </IconButton>
                </Typography>

                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <IconButton>
                        <DarkTheme type="appbar" />
                    </IconButton>
                    <IconButton>
                        <FontDirection type="appbar" />
                    </IconButton>
                    <IconButton>
                        <CardIcon type="appbar" />
                    </IconButton>
                    <IconButton>
                        <TableIcon type="appbar" />
                    </IconButton>
                    <IconButton>
                        <Home type="appbar" />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default ToolbarComponent
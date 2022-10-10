import * as React from 'react';
import {
    AppBar,
    Box,
    Drawer,
    Toolbar,
    Typography,
    Button,
    useTheme
} from '@mui/material';
import DrawerComponent from './Components/Drawer'
import AppBarComponent from './Components/AppBar'
import { AppContext } from '../../context/provider';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement | React.ReactElement[]
}

const drawerWidth = 240;


export default function DrawerAppBar(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { dir } = React.useContext(AppContext)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };



    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBarComponent handleDrawerToggle={handleDrawerToggle} />

            <Box component="nav">
                <Drawer
                    anchor={dir == 'rtl' ? 'right' : 'left'}
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    <DrawerComponent handleDrawerToggle={handleDrawerToggle} />
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                {props.children}
            </Box>
        </Box>
    );
}

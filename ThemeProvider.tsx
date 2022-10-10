import React, { useEffect } from 'react'
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import { AppContext } from './context/provider';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        info: {
            main: '#3c7a89',
            dark: '#2e4756'
        },
        primary: {
            main: '#dbc2cf',
            dark: '#e26d5c'
        },
        secondary: {
            main: '#0d47a1',
            dark: '#3e5c76'
        }
    },
    typography: {
        fontFamily: [
            'Chilanka',
            'cursive',
        ].join(','),
    }
});

export default ({ children }) => {
    const { toggleTheme, dir } = React.useContext(AppContext)

    useEffect(() => {
        document.dir = dir

    }, [dir])
    const theme = useTheme()

    const lightTheme = createTheme({
        ...theme,
        palette: {
            primary: {
                main: '#1282a2'
            },
            secondary: {
                main: '#521945'
            }
        },
        typography: {
            fontFamily: [
                'Chilanka',
                'cursive',
            ].join(','),
        }
    })
    return (
        <ThemeProvider theme={toggleTheme ? lightTheme : darkTheme}>
            {children}
        </ThemeProvider>
    )
}
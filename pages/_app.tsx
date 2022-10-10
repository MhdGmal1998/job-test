import React from 'react'
import type { AppProps } from 'next/app'
import AppBar from './../components/AppBar'
import { useEffect } from 'react';
import { AppProvider } from '../context/provider';
import ThemeProvider from '../ThemeProvider';
import ScrollToTop from 'react-scroll-to-top';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
function MyApp({ Component, pageProps }: AppProps) {

  return (
    <AppProvider>
      <ThemeProvider>
        <AppBar>
          <Component {...pageProps} />
          <ScrollToTop smooth
            component={<ExpandLessIcon />}
          />
        </AppBar>
      </ThemeProvider>
    </AppProvider>
  )
}

export default MyApp

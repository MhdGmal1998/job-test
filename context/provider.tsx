import React, { useContext } from 'react'
import AppContext from './context'
import { useState } from 'react';


const AppProvider = ({ children }) => {
    // false ==> dark 
    // true ==> light
    const [toggleTheme, setToggleThem] = useState(true)
    const [dir, setDir] = useState('ltr')

    const setToggleTheme = () => setToggleThem(prev => !prev)
    const setAppDirection = () => dir == 'rtl' ? setDir('ltr') : setDir('rtl')

    return (
        <AppContext.Provider value={{ toggleTheme, setToggleTheme, dir, setAppDirection }}>
            {children}
        </AppContext.Provider>
    )
}
export { AppContext, AppProvider }
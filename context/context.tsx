import React from 'react'
export type GlobalContent = {
    toggleTheme?: boolean,
    setToggleTheme?: () => void,
    dir?: string | 'rtl' | 'ltr',
    setAppDirection?: () => void

}
const Context = React.createContext<GlobalContent>({});
export default Context

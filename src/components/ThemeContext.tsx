import * as React from 'react'
import { useState } from 'react'

const ThemeContext = React.createContext({ theme: '', toggleTheme(): void{} });

function ThemeContextProvider(props: { children: React.ReactNode; }) {
    const [theme, setTheme] = useState<string>('dark');
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export { ThemeContextProvider, ThemeContext }
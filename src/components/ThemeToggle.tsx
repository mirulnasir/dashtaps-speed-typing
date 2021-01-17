import * as React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function ThemeToggle(props: any) {
    const context = useContext(ThemeContext)
    console.log(context.theme)
    return (
        <button onClick={context.toggleTheme} type="button">{context.theme === 'light' ? 'Light' : 'Dark'}</button>
    )
}
export default ThemeToggle
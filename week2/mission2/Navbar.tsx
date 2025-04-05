
import { useContext } from 'react';
import { ThemeContext, useTheme } from './context/ThemeProvider';

export default function Navbar() {
    const {theme, toggleTheme} = useTheme();
    console.log(theme)
  return (
    <>
    <div>Navbar</div>
    </>
  )
}

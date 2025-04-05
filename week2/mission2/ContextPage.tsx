import { ThemeProvider } from "./context/ThemeProvider";
import Navbar from "./Navbar";
import ThemeContent from "./ThemeContent";

export default function ContextPage() {
  return (
    <ThemeProvider>
        <div className='flex flex col item-center justify-center min-h-screen'>
            <Navbar/>
            <ThemeContent/>
        </div>
    </ThemeProvider>
  )
}
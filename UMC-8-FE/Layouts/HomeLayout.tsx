import { Outlet } from "react-router-dom"
import Navbar from './../componomets/Navbar';
import Footer from './../componomets/Footer';

const HomeLayout = () => {
    return (
        <div className="h-dvh flex flex-col bg-black text-white">
            <Navbar />
            <main className="flex-1 flex items-center justify-center">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default HomeLayout
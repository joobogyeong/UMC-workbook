import { Outlet } from "react-router-dom"

const HomeLayout = () => {
    return (
        <div className="h-dvh flex flex-col bg-black text-white">
            <nav className="bg-zinc-900 text-center py-4 text-lg font-semibold">
                UMC FE
            </nav>
            <main className="flex-1 flex items-center justify-center">
                <Outlet />
            </main>
            <footer className="bg-zinc-900 text-center py-4 text-sm font-semibold font-thin">
                footer
            </footer>
        </div>
    )
}

export default HomeLayout

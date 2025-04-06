import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";


const HomePage = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}
export default HomePage;
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './../pages/HomePage';
import NotFoundPage from './../pages/NotFoundPage';
import LoginPage from './../pages/LoginPage';
import HomeLayout from './../Layouts/HomeLayout';
import SignupPage from './../pages/SignupPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    errorElement: <NotFoundPage/>,
    children: [
      {index: true, element: <HomePage/>},
      {path: "Login", element: <LoginPage/>},
      {path: "Signup", element: <SignupPage/>},
    ]
  }
])

function App() {


  return (
    <>
      <RouterProvider router = {router}/>
    </>
  )
}

export default App

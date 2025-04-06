import './App.css';
import Moviepage from './pages/Moviepage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/not-found';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';

const router = createBrowserRouter([
  {
    path:'/',
    element:<HomePage />,
    errorElement: <NotFound/>,
    children: [{
      path: 'movies/:category',
      element: <Moviepage/>,
    },{
      path:'movie/:movieid',
      element: <MovieDetailPage /> 
    }]
  },
])



function App() {
  return <RouterProvider router={router} />;
}

export default App;

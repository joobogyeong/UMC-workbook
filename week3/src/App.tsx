import './App.css';
import Moviepage from './pages/Moviepage';


function App() {
  console.log(import.meta.env.VITE_TMDB_KEY)
  return (
    <>
      <Moviepage/>
    </>
  );
}

export default App;

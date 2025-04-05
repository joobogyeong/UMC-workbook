import { useEffect, useState } from 'react';
import axios from 'axios';
import { Movie } from '../types/movies';
import MovieCard from '../components/MovieCard';

export default function Moviepage() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect((): void => {
    const fetchMovies = async (): Promise<void> => {
      const {data} = await axios(
        'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`
          }          
        }
      );
      setMovies(data.results)
      
    };

    fetchMovies();
  }, []);
  console.log(movies[0]?.adult);
  return (
    <div className='p-10 gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
      {movies && movies.map((movie) => 
      <MovieCard key={movie.id} movie={movie}/>
      )}
    </div>
  );
}

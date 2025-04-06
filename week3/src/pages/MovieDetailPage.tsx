import { useParams } from "react-router-dom";
import { MovieDetailResponse } from "../types/movies";
import useCustomFetch from "../hooks/useCustomFetch";


const MovieDetailPage = () => {
    const params = useParams();
    const url = `https://api.themoviedb.org/3/movie/${params.movieid}`;
    const {isPending, isError, data:movie} = useCustomFetch<MovieDetailResponse>(url,'ko-KR');
    if (isPending){
        return<div>Loading...</div>
    }

    if (isError) {
        return <div>
            <span className='text-red-500 text-2xl'>에러가 발생했습니다.</span>
        </div>
    }

    return (
        <div className="text-2xl">
            {movie?.original_title}<br></br>
            {movie?.production_companies.map((company) => company.name)}<br></br>
            {movie?.overview}<br></br>
        </div>
    )
}

export default MovieDetailPage

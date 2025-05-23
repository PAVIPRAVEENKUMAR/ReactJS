import { useEffect, useState } from 'react'
import { MovieList } from '../component/MovieList'


export const MoviesList = () => {

    const [movies,setMovies] = useState([])
    

    const fetchMovies = (pageNo) =>{
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${pageNo}`).then((response) => {
            if(!response.ok){
                throw new Error("Network response was not ok")
            }
            return response.json()
        }).then((data) => {
            setMovies(data.results)
        }).catch((error) => {
            console.error("There was a problem with the fetch operation:", error);
        });
    
    } 

    useEffect(() => {
        fetchMovies(1)
    },[])

    return(
        <div className='movies-list-page'>
            <h1>Movie List</h1>
            <MovieList movies={movies}/>
        </div>
    )
}
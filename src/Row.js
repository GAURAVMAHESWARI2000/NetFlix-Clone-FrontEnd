import React,{useState,useEffect} from 'react'
import axios from './axios'
import './Row.css'


const base_url = "https://image.tmdb.org/t/p/original";

function Row({title,fetchUrl,isLargeRow}){
    const [movies,setMovies] = useState([]);

    useEffect(() => {
           axios.get(fetchUrl)
           .then(request=>setMovies(request.data.results))
           .catch(error=>console.log(error)) 
    },[fetchUrl]);
   // console.log(movies);
    return(
        <div className='row'>
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => {
                   return(
                    <img 
                    key={movie.id}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                    src={`${base_url}${isLargeRow ? movie.poster_path:movie.backdrop_path}`}  
                    alt={movie.name}/>
                   ) 
                })}
            </div>
        </div>
    )
}

export default Row
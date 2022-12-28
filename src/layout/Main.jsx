import { useEffect, useState } from 'react';
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

function Main() {
    const [movies, setMovies] = useState([]);
    useEffect(() => 
    {
        fetch('https://www.omdbapi.com/?apikey=759f9893&s=matrix')
        .then((res) => {
            return res.json()
        })
        .then(data => {
            setMovies(data.Search)
        })
    }, [])

    const searchingMovie = (movie) => {
        fetch(`https://www.omdbapi.com/?apikey=759f9893&s=${movie}`)
        .catch((error) => {
            console.log(error);
        })
        .then((res) => {
            return res.json()
        })
        .then(data => {
            setMovies(data.Search)
        })
    }

    return (
        <main className="container content">
            <Search searchingMovie={searchingMovie} />
            {
                movies.length ? 
                <Movies movies={movies} /> :
                <Preloader />
            }
        </main>
    );
}
export default Main;

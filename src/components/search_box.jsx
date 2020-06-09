import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

export default function Search() {

    const [name, setName] = useState('');
    const [movies, setMovies] = useState([]);
    const [clk, setClk] = useState('');
    const [det, setDet] = useState([]);
    const searchMovies = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=a37686e60e640aac019450128023b78e&language=en-US&page=1&include_adult=false&query=${name}`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    }

    const dispMovies = async (e) => {

        const urlomdb = `http://www.omdbapi.com/?apikey=dac867c1&plot=full&t=${e}`

        console.log("I have been clicked " + e);
        try {
            const details = await fetch(urlomdb);
            const detailsData = await details.json();
            setDet(detailsData);
            console.log(detailsData);
        } catch (err) {
            console.log(err);
        }
    }

    

    return (
        <>
            <div className="search">
                <h1>{name}</h1>
                <form className="search-form" onSubmit={searchMovies}>
                    <input type="text" className="search--text" placeholder="i.e Interstellar" value={name} onChange={(e) => { setName(e.target.value) }} />
                    <button className="search--btn btn btn-success btn-lg" type="submit" >Search</button>
                </form>
            </div>

            <div className="">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <div className="card-element " key={movie.id} onClick={() => { setClk(movie.title); dispMovies(movie.title); }}>
                        <img className="card--image "
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                            alt={movie.title + ' poster'}
                        />
                        <div className="card--content">
                            <h3 className="card--title">{movie.title}</h3>
                            <p><small>RELEASE DATE: {movie.release_date}</small></p>
                            <p><small>RATING: {movie.vote_average}</small></p>
                            <p className="card--desc">{movie.overview}</p>
                        </div>
                    </div>
                ))}
            </div>

        </>);
}
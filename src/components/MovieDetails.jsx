import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../assets/movies.json';

const MovieDetails = () => {
    const { id } = useParams(); 
    console.log(id);
    
    const movie = data.find(movie => movie.id === parseInt(id));

    if (!movie) {
        return <p>Movie not found</p>;
    }

    return (
        <div className="movie-details">
            <h1>{movie.title}</h1>
            <img src={movie.img} alt={movie.title} />
            <p>Year: {movie.year}</p>
            <p>Genre: {movie.genre}</p>
            <p>Description: {movie.description}</p>
        </div>
    );
}

export default MovieDetails;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Rating from './Rating';

const Movie = ({ id }) => {
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/${id}`);
                setMovieData(response.data);
            } catch (error) {
                console.error('Error fetching movie data:', error);
            }
        };

        fetchMovieData();

        // Cleanup function to cancel the request if the component unmounts
        return () => {
            // Cancel the request
        };
    }, [id]); // Fetch data whenever the ID prop changes

    if (!movieData) {
        return <div>Loading...</div>;
    }

    const { title, year, img, genre, description, rating } = movieData;

    return (
        <div className="movie">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <p>Year: {year}</p>
            <p>Genre: {genre}</p>
            <p>Description: {description}</p>
            <Rating ratings={rating} />
        </div>
    );
};

export default Movie;

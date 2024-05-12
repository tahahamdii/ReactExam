import React, { useState } from 'react';
import Movie from "./Movie";
import data from '../assets/movies.json';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const Movies = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredMovies, setFilteredMovies] = useState(data);

    const handleSearch = (term) => {
        setSearchTerm(term);
        if (term.trim() === '') {
            setFilteredMovies(data);
        } else {
            const filtered = data.filter(movie => movie.title.toLowerCase().includes(term.toLowerCase()));
            setFilteredMovies(filtered);
        }
    };

    return ( 
        <div className="movies" style={{ display: "flex" }}>
            {data.map((m) => (
                <div className="card" key={m.id} style={{ marginRight: "10px" }}>
                    {/* Wrap the movie title with Link */}
                    <Link to={`/films/${m.id}`}>
                        <h2>{m.title}</h2>
                    </Link>
                    <Movie {...m}/>
                </div>
            ))}
        </div>
    );
}
 
export default Movies;
import React, { useState } from 'react';
import Movie from "./Movie";
import data from '../assets/movies.json';
import SearchBar from './SearchBar';

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
        <div>
            <SearchBar onSearch={handleSearch} />
            <div className="movies" style={{ display: "flex" }}>
                {filteredMovies.map((m) => (
                    <div className="card" key={m.id} style={{ marginRight: "10px" }}>
                        <Movie {...m}/>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Movies;

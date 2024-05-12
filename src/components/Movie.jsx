import Movies from "../assets/movies.json";
import Rating from "./Rating";

const Movie = ({title,year,img,genre,description,rating}) => {
    return ( 
        <div className="movie">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            
            <p>Year :{year}</p>
            <p>Genre :{genre}</p>
            <p>Description :{description}</p>
            <Rating ratings={rating} /> {/* Pass ratings as a prop */}
        </div>
     );
}
 
export default Movie;
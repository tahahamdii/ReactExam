import Movies from "../assets/movies.json";

const Movie = ({title,year,img,genre,description}) => {
    return ( 
        <div className="movie">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            
            <p>Year :{year}</p>
            <p>Genre :{genre}</p>
            <p>Description :{description}</p>
        </div>
     );
}
 
export default Movie;
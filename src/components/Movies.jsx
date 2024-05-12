import Movie from "./Movie";
import data from '../assets/movies.json';

const Movies = () => {
    return ( 
        <div className="movies" style={{ display: "flex" }}>
            {data.map((m)=>(
                <div className="card" key={m.id} style={{ marginRight: "10px" }}>
                    <Movie {...m}/>
                </div>
            ))}
        </div>
    );
}
 
export default Movies;
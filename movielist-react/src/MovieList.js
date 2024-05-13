import React, {useState, useRef} from 'react';
import Movie from './Movie';

export default function MovieList() {
    const [movies, setMovies] = useState([{
        id: 1,
        title: "Star Wars",
        rating: 5
    }]);
    const titleRef = useRef();
    const ratingRef = useRef();

    function addItem(event) {
        event.preventDefault();
        if (titleRef.current.value !== "" && ratingRef.current.value !== "0") {
            if (event.type === "click") {
                const newId = movies.length > 0 ? movies[movies.length -1].id + 1: 1;
                setMovies([...movies, {
                    id: newId,
                    title: titleRef.current.value,
                    rating: ratingRef.current.value
                }]);
    
                titleRef.current.value = "";
                ratingRef.current.value = "0";
            }
        } else {
            alert("Du måste skriva in en film titel och välja ett betyg för att lägga till en film!");
        }
    }

    const deleteItem = (id) => {
        setMovies(movies.filter((item) => item.id !== id));
    }
    const orderByTitle = () => {
        const sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title));
        setMovies(sortedMovies);
    }
    const orderByRating = () => {
        const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);
        setMovies(sortedMovies);
    }
    return (
        
        <div>
            <fieldset>
                <label htmlFor="title-field">Titel:</label>
                <input type="text" id="title-field" className="form-control" placeholder="Skriv en film titel här..." ref={titleRef}/>
                
                <label htmlFor="rating-field">Betyg:</label>
                <select type="text" id="rating-field" className="form-control" defaultValue='0' ref={ratingRef}>
                    <option value="0">Välj betyg här...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <input type="submit" className="btn btn-success mt-3" value="Spara Film" onClick={addItem}/>
            </fieldset>
            <legend>Inlagda Filmer</legend>            
            <ul className='list-group'>
                { movies.map(movies => <Movie key={movies.id} item={movies} deleteItem={deleteItem} />)}
            </ul>
            <button id="order-alphabetic" className="btn btn-primary" onClick={orderByTitle}>
                Alfabetisk ordning
            </button>
            <button id="order-grade" className="btn btn-primary" onClick={orderByRating}>
                Betygsordning
            </button>
        </div>
    )
}
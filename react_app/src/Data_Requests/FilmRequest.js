import axios from 'axios';
import { useState } from 'react';


const FilmRequest = () => {

    const [data, setData] = useState("");
    const [apiKey, setApiKey] = useState("");
    const [filmTitle, setFilmTitle] = useState("");

    const updateApiKey = (event) => {
        event.preventDefault();
        setApiKey(event.target.value);
    }
    const updateTitle = (event) => {
        event.preventDefault();
        setFilmTitle(event.target.value);
    }

    const makeRequest = (event) => {
        axios
            .get("http://www.omdbapi.com/?i=tt3896198&apikey=" + apiKey + "&t=" + filmTitle)
            .then(response => {
                console.log(response.data);
                setData(response.data);
            })
    };

    const {Title, Year, Rated, Genre, Plot, Poster} = data;

    return (
        <>
            <fieldset>
                <h2>Film Request</h2>
                <p>Enter API Key:</p>
                <input type='text' onChange={(event)=>updateApiKey(event)}/>
                <p>Enter name of film:</p>
                <input type='text' onChange={(event)=>updateTitle(event)}/>

                <button onClick={(event)=>makeRequest(event)}>Search</button>

                <h2>{Title}</h2>
                <p>Year: {Year}</p>
                <p>Rated: {Rated}</p>
                <p>Genre: {Genre}</p>
                <p>{Plot}</p>
                <img src={Poster} alt='The poster'></img>

            </fieldset>
        </>
    )

}

export default FilmRequest;
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

    return (
        <>
            <div>
                <h2>Film Request</h2>
                <p>Enter API Key:</p>
                <input type='text' onChange={(event)=>updateApiKey(event)}/>
                <p>Enter name of film:</p>
                <input type='text' onChange={(event)=>updateTitle(event)}/>

                <button onClick={(event)=>makeRequest(event)}>Make Request</button>

                <h2>{data.Title}</h2>
                <p>{data.Year}</p>
                <p>{data.Rated}</p>
                <p>{data.Genre}</p>
                <p>{data.Plot}</p>
                <img src={data.Poster} alt='The poster'></img>

            </div>
        </>
    )

}

export default FilmRequest;
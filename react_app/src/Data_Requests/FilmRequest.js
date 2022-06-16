import axios from 'axios';
import { useState } from 'react';
import FilmInfo from './FilmInfo';


const FilmRequest = () => {

    const [data, setData] = useState("");
    const [apiKey, setApiKey] = useState("");
    const [filmTitle, setFilmTitle] = useState("");
    const [request, setRequest] = useState(false);

    const {Title, Year, Rated, Genre, Plot, Poster} = data;

    const render = () => {
        if (request) {
            return <FilmInfo key={Title + Year} Title={Title} Year={Year} Rated={Rated} Genre={Genre} Plot={Plot} Poster={Poster}/>
        }
    }
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
                setRequest(true);
            })
    };

    return (
        <>
            <fieldset>
                <h2>Film Request</h2>
                <p>Enter API Key:</p>
                <input type='text' onChange={(event)=>updateApiKey(event)}/>
                <p>Enter name of film:</p>
                <input type='text' onChange={(event)=>updateTitle(event)}/>

                <button onClick={(event)=>makeRequest(event)}>Search</button>

                {render()}

            </fieldset>
        </>
    )

}

export default FilmRequest;
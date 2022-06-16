import axios from 'axios';
import { useState } from 'react';
import FilmInfo from './FilmInfo';


const FilmRequest = () => {

    const [data, setData] = useState("");
    const [apiKey, setApiKey] = useState("");
    const [filmTitle, setFilmTitle] = useState("");
    const [request, setRequest] = useState(false);

    //destructuring so we don't have to type out data.Title, etc.
    const {Title, Year, Rated, Genre, Plot, Poster} = data;

    //Renders the film information when request is turned to true, which is done when button is clicked
    const render = () => {
        if (request) {
            //Calls information from the filmInfo prop, that states the format when rendered
            return <FilmInfo key={Title + Year} Title={Title} Year={Year} Rated={Rated} Genre={Genre} Plot={Plot} Poster={Poster}/>
        }
    }
    const updateApiKey = (event) => {
        //ignores null values
        event.preventDefault();
        setApiKey(event.target.value);
    }
    const updateTitle = (event) => {
        event.preventDefault();
        setFilmTitle(event.target.value);
    }

    //makes the request for film data
    const makeRequest = (event) => {
        axios
            //uses axios to get data from API, takes the base website, adds user API key, next part of URL and film title
            .get("http://www.omdbapi.com/?i=tt3896198&apikey=" + apiKey + "&t=" + filmTitle)
            .then(response => {
                console.log(response.data);
                //sets the data state we've set to the response data from the API
                setData(response.data);
                //sets the request to true to render details onto page
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
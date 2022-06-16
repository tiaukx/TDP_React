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

    //updates the API key value
    const updateApiKey = (event) => {
        //ignores null values
        event.preventDefault();
        //uses input value to set the API key
        setApiKey(event.target.value);
    }

    //updates film title value
    const updateTitle = (event) => {
        event.preventDefault();
        //uses input value to set the film title
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
                {/* when changed (as user types) calls the function that changes the API key */}
                <input type='text' onChange={(event)=>updateApiKey(event)}/>    
                <p>Enter name of film:</p>
                                {/* when changed (as user types) calls the function that changes the film title */}
                <input type='text' onChange={(event)=>updateTitle(event)}/>

                {/* when clicked calls the function that requests the data from the API */}
                <button onClick={(event)=>makeRequest(event)}>Search</button>

                {/* renders the film details when request is made */}
                {render()}

            </fieldset>
        </>
    )

}

export default FilmRequest;
const FilmInfo = (props) => {
    
    const {Title, Year, Rated, Genre, Plot, Poster} = props;

    return (
        <>
                <h2>{Title}</h2>
                <p>Year: {Year}</p>
                <p>Rated: {Rated}</p>
                <p>Genre: {Genre}</p>
                <p>{Plot}</p>
                <img src={Poster} alt='The poster'></img>
        </>
    )
}

export default FilmInfo;
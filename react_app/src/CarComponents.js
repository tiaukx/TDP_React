import {useState} from 'react';

const CarDetails = () => {
    const [brand, setBrand] = useState("BMW");
    const [model, setModel] = useState("M4");
    const [colour, setColour] = useState("Blue");
    const [year, setYear] = useState(2020);

    return (
        <>
            <h1>Car Details</h1>
            <p>Brand: {brand}</p>
            <p>Model: {model}</p>
            <p>Colour: {colour}</p>
            <p>Year: {year}</p>

            <form>
                <label>Update Brand:</label>
                <input name="brand" type="text" value={brand} onChange={event => setBrand(event.target.value)}/><br/>
                <label>Update Model:</label>
                <input name="model" type="text" value={model} onChange={event => setModel(event.target.value)}/><br/>
                <label>Update Colour:</label>
                <input name="colour" type="text" value={colour} onChange={event => setColour(event.target.value)}/><br/>
                <label>Update Year:</label>
                <input name="year" type="text" value={year} onChange={event => setYear(event.target.value)}/>
            </form>

        </>
    )

}

export default CarDetails;
import {useState} from 'react';

const cats = ["Moogle", "Mickey", "Lil Bub", "Grumpy Cat", "Sad Boy"];


const ProductTable = () => {
    
    const [search, setSearch] = useState("");
    const [result, setResult] = useState("");

    const printArray = () => {
        //Loops through cats array and returns a p tag for each element in the array
        return cats.map((cats) => <li>{cats}</li>)
    }

    const searchBar = (event) => {
        setSearch(event.target.value);
        
        for (let cat of cats) {
            if (event.target.value === cat) {
                return setResult(cat);
            }
        }
        setResult("error");
    }
    
    return (
        <>
            <h3>Cats:</h3>
            {printArray()}
            <br/>
            <label>Search:</label>
            <input name="search" type="text" value={search} onChange={searchBar}/><br/>
            <p>Result: {result}</p>
        </>
    )
}

export default ProductTable;
import {useState} from 'react';

const cats = ["Moogle", "Mickey", "Lil Bub", "Grumpy Cat", "Sad Boy"];


const ProductTable = () => {
    
    const [search, setSearch] = useState("");
    const [result, setResult] = useState("");

    const printArray = () => {
        //Loops through cats array and returns a p tag for each element in the array
        return cats.map((cats) => <li>{cats}</li>)
    }

    //Finds one cat from the list
    const searchBar = (event) => {
        setSearch(event.target.value);
        
        for (let cat of cats) {
            if (event.target.value.toLowerCase() === cat.toLowerCase()) {
                return setResult(cat);
            }
        }
        setResult("Exact cat not found");
    }
    
    //Finds several cats in the list
    const filtered = [];

    for (let cat of cats) {
        if (cat.toLowerCase().startsWith(search.toLowerCase())) filtered.push(cat);
    }

    return (
        <>
            <h3>Cats:</h3>
            {printArray()}
            <br/>
            <label>Search:</label>
            <input name="search" type="text" value={search} onChange={searchBar}/><br/>
            <p>Single Cat Result: {result}</p><br/>
            <p>Multiple Cats Result: {filtered.map(filtered => <li>{filtered}</li>)}</p>
        </>
    )
}

export default ProductTable;
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
    

    return (
        <>
            <h3>Cats:</h3>
            {printArray()}
            <br/>
            <label>Search:</label>
            <input name="search" type="text" value={search} onChange={searchBar}/><br/>
            <p>Single Cat Result: {result}</p>
            <p>Multiple Cats Result: 
                {cats.filter(cats => cats.toUpperCase().startsWith(search.toUpperCase()))
                .map(cats => <li>{cats}</li>)}
            </p>
        </>
    )
}

export default ProductTable;
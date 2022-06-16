const HigherFunctionPractice = () => {
    
    const numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    //reduces the value of an array to one value, acc & next used to cycle through each element in array and perform a task
    //in this case, finding the larger value then discarding the smaller value
    const maxValue = numArray.reduce((acc, next) => (acc > next) ? acc : next);
    //alternatively could also be done using
    // const maxValue = numArray.reduce((acc, next) => Math.max(acc, next));
    const minValue = numArray.reduce((acc, next) => (acc < next) ? acc : next);

    const noOddNums = numArray.filter(num => num % 2 === 0).reduce((acc, next) => acc + ", " + next);
    const noEvenNums = numArray.filter(num => num % 2 !== 0).reduce((acc, next) => acc + ", " + next);

    const sumOfNums = numArray.reduce((acc, next) => acc + next);
    const squareOfNums = numArray.map(num => num ** 2).filter(num => num % 2 !== 0).reduce((acc, next) => (acc < next) ? acc : next);
    //alternatively could also be done using Math.pow
    //const squareOfNums = numArray.map(num => Math.pow(num, 2)).filter(num => num % 2 !== 0).reduce((acc, next) => (acc < next) ? acc : next);
    //with Math.pow(num, 2) you have to state the 2nd value (e.g. 2) to say what you want the power to be

    return (
        <>
            <p>Max Value: {maxValue}</p>
            <p>Min Value: {minValue}</p>
            <p>Removed Odd Numbers: {noOddNums}</p>
            <p>Removed Even Numbers: {noEvenNums}</p>
            <p>Sum of List: {sumOfNums}</p>
            <p>Every Number Squared, No Even Numbers and the Minimum Value: {squareOfNums}</p>
        </>
    )
}

export default HigherFunctionPractice;
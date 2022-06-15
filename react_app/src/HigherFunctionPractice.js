const HigherFunctionPractice = () => {
    
    const numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

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
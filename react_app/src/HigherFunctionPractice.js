const HigherFunctionPractice = () => {
    
    const numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];

    const maxValue = numArray.reduce((acc, next) => (acc > next) ? acc : next);
    const minValue = numArray.reduce((acc, next) => (acc < next) ? acc : next);

    const noOddNums = numArray.filter(num => {return num % 2 === 0}).reduce((acc, next) => acc + ", " + next);
    const noEvenNums = numArray.filter(num => {return num % 2 !== 0}).reduce((acc, next) => acc + ", " + next);

    const sumOfNums = numArray.reduce((acc, next) => {return acc + next});
    const squareOfNums = numArray.map(num => num ** 2).filter(num => {return num % 2 !== 0}).reduce((acc, next) => (acc < next) ? acc : next);

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
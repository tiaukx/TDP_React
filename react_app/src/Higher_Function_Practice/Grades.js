let grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Cyrus', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Jeff', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

const GradeResults = () => {

    const isBoy = student => student.sex === 'M';
    const isGirl = student => student.sex === 'F';
    
    const getBoys = grades => (grades.filter(isBoy));
    const getGirls = grades => (grades.filter(isGirl));
    
    let average = grades => (grades.reduce((acc, curr) => (acc +curr.grade), 0) / grades.length);
    
    let maxGrade = grades => (Math.max(...grades.map(student => student.grade)));
    let minGrade = grades => (Math.min(...grades.map(student => student.grade)));
    
    let classRoomAverage = average(grades);
    let boysAverage = average(getBoys(grades));
    let girlsAverage = average(getGirls(grades));

    //QA Exercise
    let highestGrade = maxGrade(grades);
    let lowestGrade = minGrade(grades);
    let highestGradeBoys = maxGrade(getBoys(grades));
    let highestGradeGirls = maxGrade(getGirls(grades));
    let lowestGradeBoys = minGrade(getBoys(grades));
    let lowestGradeGirls = minGrade(getGirls(grades));

    return (
        <>
            <p>Classroom Average: {classRoomAverage}</p>
            <p>Boy Average: {boysAverage}</p>
            <p>Girl Average: {girlsAverage}</p>

            <p>Highest Grade: {highestGrade}</p>
            <p>Lowest Grade: {lowestGrade}</p>
            <p>Highest Boy Grade: {highestGradeBoys}</p>
            <p>Highest Girl Grade: {highestGradeGirls}</p>
            <p>Lowest Boy Grade: {lowestGradeBoys}</p>
            <p>Lowest Girl Grade: {lowestGradeGirls}</p>
        </>
    )
}

export default GradeResults;
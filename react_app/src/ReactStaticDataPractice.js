import sampleData from "./sampleData.json";

const Content = () => {

    return (
        <>
            {sampleData.map((person) => (
                <p>{person.name} from {person.address.city}</p>
            ))}
        </>
    );
}

export default Content;
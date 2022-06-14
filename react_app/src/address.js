const addressApp = () => {
    
    const address = {
        name: "Tia",
        line1: "123 Easy Street"
    }

    return (
        <div>
            <h1>{address.name}</h1>
            <h2>Address: {address.line1}</h2>
        </div>
    )

};

export default addressApp;
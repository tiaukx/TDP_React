import { useState } from 'react';

const CustomerDetails = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const showDetails = (event) => {
        event.preventDefault();
        console.log(username, password);
    }

    return (
        <form onSubmit={showDetails}>
            <label>Username:</label>
            <input name="username" type="text" value={username} onChange={event => setUsername(event.target.value)}/><br/>
            <label>Password:</label>
            <input name="password" type="password" value={password} onChange={event => setPassword(event.target.value)}/><br/>
            <button>Create Profile</button>
        </form>
    )
}

export default CustomerDetails;
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/Contact">Contact</Link>
            <br/>
            <Link to="/Users">Users</Link>
        </>
    );
};

export default Nav;
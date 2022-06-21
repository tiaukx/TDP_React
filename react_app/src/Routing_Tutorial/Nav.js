import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/About">About Us</Link>
            <br/>
            <Link to="/Shop">Shop Now</Link>
        </>
    );
};

export default Nav;
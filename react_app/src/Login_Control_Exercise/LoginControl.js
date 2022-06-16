import { useState } from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Greeting from './Greeting';

const LoginControl = () => {

    //sets isLoggedIn to false as default
    const [isloggedIn, setIsLoggedIn] = useState(false);

    //button that changes its value depending on the value of isLoggedIn, using an if statement
    //if isLoggedIn is true, displays the logout button
    //if isLoggedIn is false, displays the login button
    let button = (isloggedIn) ? <LogoutButton onClick={() => setIsLoggedIn(false)}/> : <LoginButton onClick={() => setIsLoggedIn(true)}/>

    return (
        <>
            {/* returns the greeting prop if isLoggedIn is true */}
            <Greeting isloggedIn={isloggedIn}/>
            {/* renders button depending on isLoggedIn value */}
            {button}
        </>
    )

}

export default LoginControl;
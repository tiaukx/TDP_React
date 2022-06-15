import { useState } from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Greeting from './Greeting';

const LoginControl = () => {

    const [isloggedIn, setIsLoggedIn] = useState(false);

    let button = (isloggedIn) ? <LogoutButton onClick={() => setIsLoggedIn(false)}/> : <LoginButton onClick={() => setIsLoggedIn(true)}/>

    return (
        <>
            <Greeting isloggedIn={isloggedIn}/>
            {button}
        </>
    )

}

export default LoginControl;
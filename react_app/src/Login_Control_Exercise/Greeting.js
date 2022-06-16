const Greeting = (props) => {
    //creates a new constant that uses the isLoggedIn value from the relevant prop
    const isloggedIn = props.isloggedIn;
    //if isLoggedIn is true, returns a greeting
    if (isloggedIn) return <h1>Welcome Back!</h1>
    //if isLoggedIn is false, returns a sign up request
    return <h1>Please sign up.</h1>
}

export default Greeting;
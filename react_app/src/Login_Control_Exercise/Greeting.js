const Greeting = (props) => {
    const isloggedIn = props.isloggedIn;
    if (isloggedIn) return <h1>Welcome Back!</h1>
    return <h1>Please sign up.</h1>
}

export default Greeting;
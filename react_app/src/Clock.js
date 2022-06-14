import { Component } from 'react';

class Clock extends Component {
    constructor(props){
        super(props);
        this.state = { date: new Date()};
    }
    render () {
        return (
            <>
                <h2>What is the time you ask?</h2>
                <p>The time is {this.state.date.toLocaleTimeString()}</p>
            </>
        )
    }
}

export default Clock;
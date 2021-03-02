import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 25, 2021'
        }
    }

    changedDeadline() {
        this.setState({deadline: this.state.newDeadline});
    }

    render(){
       return( 
        <div className="App">
            <div className="App-title"> Countdown to {this.state.deadline}</div>
            <Clock
                deadline={this.state.deadline}/>
            <Form>
            <FormControl 
                className="Deadline-input"
                placeholder='new date'
                onChange={event =>this.setState({newDeadline: event.target.value})}/>
            <Button onClick={() => this.changedDeadline()}>Submit</Button>
            </Form>
        </div>
       )
    }
    
}

export default App;
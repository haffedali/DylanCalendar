import React, { Component } from 'react';
import axios from 'axios';
import CreateEvent from "../CreateEvent"
import "bootstrap/dist/css/bootstrap.min.css";
import './Day.css';

export default class Day extends Component {
    // Notes on this component:
    // 1. Is constructed with events and event data passed as props
    // 2. Create event button opens modal that displays the CreateEvent component
    // 3. Date is passed as prop to be displayed
    // 4. Need to pass down function for create event, instead make it simply return the date of the day it clicked to parent component
    // and the parent component (Calendar) renders the CreateEvent component. It will look like the + button does it, but we sneaky sneaky 
    constructor(props){
        super(props);

        this.onCreateEventClick = this.onCreateEventClick.bind(this)
        this.state = {
            isModalOpen: false,
        }
    }

    onCreateEventClick(e){
        // e.preventDefault();

        this.setState({
            isModalOpen: true,
        })

    }

    render(){
        return(
            <div className='container'>
                <div className='box'>
                    <div className='heading'>
                        <div className='date'>date</div>
                        <button onClick={this.onCreateEventClick}>+</button>
                    </div>
                    {/* will need to populate this with data from props */}
                    <div className='body'>
                        <p>Event details go here?</p>
                    </div>
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react';
import axios from 'axios';
import CreateEvent from "../CreateEvent"
import './Day.css';

export default class Day extends Component {
    // Notes on this component:
    // 1. Is constructed with events and event data passed as props
    // 2. Create event button opens modal that displays the CreateEvent component
    // 3. Date is passed as prop to be displayed
    constructor(props){
        super(props);

        this.state = {
        
        }
    }


    render(){
        return(
            <div className='container'>
                <div className='box'>
                    <div className='heading'>
                        <div className='date'>date</div>
                        <div className='button'>+</div>
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
import React, { Component } from 'react';
import axios from 'axios';
import CreateEvent from "../CreateEvent"
import EventBubble from "../EventBubble"
import "bootstrap/dist/css/bootstrap.min.css";
import './Day.css';
import AddEvent from "../../assets/AddEvent.svg"

var moment = require('moment')

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
        // this.onEventBubbleClick = this.onEventBubbleClick.bind(this)


        let today = moment().format()
        today = today.slice(0,10)
        let day = today.slice(8,10)

        this.state = {
            events: [],
            date: today,
            isModalOpen: false,
            isBubbleOpen: false,
            day: day
        }
    }

    onCreateEventClick(e){
        // e.preventDefault();

        this.setState({
            isModalOpen: true,
        })


        axios.get('http://localhost:4000/events/' + this.state.date)
        .then(response => {
            console.log(response)
            this.setState({events: response.data});
        })
        .catch(function (error){
            console.log(error);
        })

    }

    // onEventBubbleClick(e){
    //     e.preventDefault()

    //     console.log(e.target)

    //     if (this.state.isBubbleOpen === false){
    //         this.setState({
    //             isBubbleOpen: true
    //         })
    //     }
    // }

    componentDidMount(){
        console.log('component did mount')
        axios.get('http://localhost:4000/events/' + this.state.date)
            .then(response => {
                this.setState({events: response.data});
            })
            .catch(function (error){
                console.log(error);
            })

        
    }
    



    render(){
        return(
            <div className='container_box'>
                <div className='box'>
                    <div className='heading'>
                        <div className='date'>{this.state.day}</div>
                        {/* <img onClick={this.onCreateEventClick} src={AddEvent} height="35" width="35" /> */}
                    </div>
                    {/* will need to populate this with data from props */}
                    <div className='day-body'>
                        {this.state.events.map((event, i) => (
                            <div key={i} id={event._id}> <EventBubble title = {event.event_title} summary = {event.event_summary} /></div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react';
import axios from 'axios';

export default class CreateEvent extends Component {
    constructor(props){
        super(props);

        this.onChangeEventTitle = this.onChangeEventTitle.bind(this)
        this.onChangeEventSummary = this.onChangeEventSummary.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            event_title: '',
            event_summary: '',
        }
    }

    onSubmit(e){
        e.preventDefault();

        const newEvent = {
            event_title: this.state.event_title,
            event_summary: this.state.event_summary
        }
        
        axios.post('http://localhost:4000/events/add', newEvent)
        .then(res => console.log(res.data));

        this.setState({
            event_title: '',
            event_summary: ''
        })
    }

    onChangeEventTitle(e){
        this.setState({
            event_title: e.target.value
        })
    }

    onChangeEventSummary(e){
        this.setState({
            event_summary: e.target.value
        })
    }


    render(){
        return(
            <div style={{marginTop: 10}}>
                <h3>Create New Event</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title:</label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.event_title}
                            onChange={this.onChangeEventTitle}
                            />
                    </div>
                    <div className="form-group">
                        <label>Summary:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.event_summary}
                            onChange={this.onChangeEventSummary}
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
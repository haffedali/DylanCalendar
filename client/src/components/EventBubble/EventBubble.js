import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import './EventBubble.css'

export default class EventBubble extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }



    render(){
        return(
            <div className="bubble" data={this.props.summary}>{this.props.title}</div>
        )
    }

}
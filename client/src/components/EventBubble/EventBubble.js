import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import './EventBubble.css'

export default class EventBubble extends Component {
    constructor(props){
        super(props);

        this.onEventBubbleClick = this.onEventBubbleClick.bind(this)

        this.state = {}
    }

    onEventBubbleClick(){
        console.log(this.props.summary)
    }

    render(){
        return(
            <div className="bubble" onClick={this.onEventBubbleClick}>{this.props.title}</div>
        )
    }

}
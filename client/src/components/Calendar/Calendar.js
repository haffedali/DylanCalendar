import React, { Component } from 'react';
import Day from "../Day"
import CreateEvent from "../CreateEvent"
import axios from 'axios';
import "./Calendar.css"


var moment = require('moment');

export default class Calendar extends Component {
    constructor(props){
        super(props)

        var month = moment().month()

        var amount = moment().daysInMonth()
        

        var months = {
            0: "January",
            1: "Febuary",
            2: "March",
            3: "April",
            4: "May",
            5: "June",
            6: "July",
            7: "August",
            8: "September",
            9: "October",
            10: "November",
            11: "December"
        }

        month = months[month]


        this.state = {
            monthStart: "monday",
            count: 0,
            amount: amount,
            month: month,
            startOfMonth: '',
            endOfMonth: ''
        }
    }

    componentDidMount(){
        var startOfMonth = moment().startOf(this.state.month).format("dddd")
        var endOfMonth = moment().endOf(this.state.month).format("dddd")
        this.setState({
            startOfMonth: startOfMonth,
            endOfMonth: endOfMonth
        })
    }


    render(){
        let count = 1
        let started = false
        return(
            <div className="container">
                <h6>{[this.state.month]}</h6>
                <table className="calendar_body">
                    <thead>
                        <tr>
                            <th>Sunday</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                        </tr>
                    </thead>
                    <tbody className="calendar_days">
                        <tr className="day_row">
                            <td className="border border-info Sunday">
                                {
                                  this.state.startOfMonth === "Sunday"
                                        ?  <div> <Day cell="1"/>{started = true}</div>
                                        :   <div></div>
                                }
                            </td>
                            <td className="border border-info Monday">
                                {
                                  (this.state.startOfMonth === "Monday")
                                        ?  <Day cell="2"/>
                                        :  <div></div>
                                }
                            </td>
                            <td className="border border-info Tuesday">
                                {
                                  (this.state.startOfMonth === "Tuesday")
                                      ?  <Day cell='3'/>
                                      :  <div></div>
                                }
                            </td>
                            <td className="border border-info Wednesday">
                                {
                                  (this.state.startOfMonth === "Wednesday")
                                      ?  <Day cell="4"/>
                                      :  <div></div>
                                }
                            </td>
                            <td className="border border-info Thursday">
                                {
                                  (this.state.startOfMonth === "Thursday")
                                      ?  <Day cell="5"/>
                                      :  <div></div>
                                }
                            </td>
                            <td className="border border-info Friday">{(this.state.startOfMonth === "Friday")?<div><Day cell="6"/></div>:<div></div>}</td>
                            <td className="border border-info Saturday">{(this.state.startOfMonth === "Saturday")?<div><Day cell="7"/></div>:<div></div>}</td>
                        </tr>
                        <tr className="day_row">
                            <td className="border border-info"><Day cell="8"/></td>
                            <td className="border border-info"><Day cell="9"/></td>
                            <td className="border border-info"><Day cell="10"/></td>
                            <td className="border border-info"><Day cell="11"/></td>
                            <td className="border border-info"><Day cell="12"/></td>
                            <td className="border border-info"><Day cell="13"/></td>
                            <td className="border border-info"><Day cell="14"/></td>
                        </tr>
                        <tr className="day_row">
                            <td className="border border-info"><Day cell="15"/></td>
                            <td className="border border-info"><Day cell="16"/></td>
                            <td className="border border-info"><Day cell="17"/></td>
                            <td className="border border-info"><Day cell="18"/></td>
                            <td className="border border-info"><Day cell="19"/></td>
                            <td className="border border-info"><Day cell="20"/></td>
                            <td className="border border-info"><Day cell="21"/></td>
                        </tr>
                        <tr className="day_row">
                            <td className="border border-info"><Day cell="22"/></td>
                            <td className="border border-info"><Day cell="23"/></td>
                            <td className="border border-info"><Day cell="24"/></td>
                            <td className="border border-info"><Day cell="25"/></td>
                            <td className="border border-info"><Day cell="26"/></td>
                            <td className="border border-info"><Day cell="27"/></td>
                            <td className="border border-info"><Day cell="28"/></td>
                        </tr>
                        <tr className="day_row">
                            <td className="border border-info"><Day cell="29"/></td>
                            <td className="border border-info"><Day cell="30"/></td>
                            <td className="border border-info"><Day cell="31"/></td>
                            <td className="border border-info"><Day cell="32"/></td>
                            <td className="border border-info"><Day cell="33"/></td>
                            <td className="border border-info"><Day cell="34"/></td>
                            <td className="border border-info"><Day cell="35"/></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}
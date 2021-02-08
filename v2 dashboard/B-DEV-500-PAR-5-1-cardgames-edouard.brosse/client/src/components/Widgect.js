import React, { Component } from 'react';
import './Widgect.css';
import '../css/body.css';
import SW from './SWidect.js'

const option = [
    {
        label: "select here",
        value: "empty",
    },
    {
        label: "Time",
        value: "time",
    },
    {
        label: "Weather",
        value: "wheather",
    },
    {
        label: "Redit",
        value: "redit",
    },
    {
        label: "News",
        value: "news",
    },
    {
        label: "Youtube",
        value: "youtube",
    },
    {
        label: "SuperHero",
        value: "superhero",
    },
];

class Widgect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          in: "Empty",
        };
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(e) {
        console.log("new select!!");
        //alert( e.target.value);
        this.setState({ in: e.target.value });
      }
    render() {
        //alert(document.getElementById("list"));
        return (
            <section>
                <div id="MainContainer">
                <label>select Widgect  </label>
                    <select value={this.state.in} onChange={this.handleChange} id="list">
                        {option.map((option)=> (
                            <option value={option.value}>{option.label}</option>
                        )) }
                    </select>
                </div>
                <text>{this.state.in}</text>
                <div>
                    <SW data={this.state.in} int={this.props.int}/>
                </div>
            </section>
        );
    }
}

export default Widgect;
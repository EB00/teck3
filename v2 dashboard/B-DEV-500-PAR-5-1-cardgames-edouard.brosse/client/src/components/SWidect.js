import React, { Component } from 'react';
import './Widgect.css';
import '../css/body.css';
import Weather from './wheather.js';
import Time from './Time.js';
import Youtube from './youtube';

const add = document.querySelector('.editButton');
var video_link = '';

class SW extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        //  in: "Empty",
            value: '',
            enter: ' ',
            nb: this.props.int
        };
        this.onKeyUp = this.onKeyUp.bind(this);
  //      this.getValue = this.getValue.bind(this);
    }

    //refreshPage(){
    //    window.location.reload(false);
    //}

    onKeyUp(event) {
        if(event.charCode === 13){
            ///alert(document.getElementsByClassName("item_input")[this.state.nb].value, "////////");
            if(document.getElementsByClassName("item_input")[this.state.nb].value !== "") {
                //alert("setValue for send", document.getElementsByClassName("item_input")[this.state.nb].value);
                this.setState({enter: document.getElementsByClassName("item_input")[this.state.nb].value});
            }else {
                alert("empty => default value");
                this.setState({enter: " "});
            }
        }
    }

    renderSwitch(){
        switch(this.props.data) {
            case 'Wheather':
                return (<div><Weather data={this.state.enter}/></div>);
            case 'news':
                return (<div><p>news comming soon</p></div>);
            case 'superHero':
                return (<div><p>superHero comming soon</p></div>);
            case 'time':
                return (<div><Time data={this.state.enter}/></div>);
            case 'youtube':
                return (<div> <Youtube data={this.state.enter}/></div>);
            default:
                return 'SELECTIONEZ UN WIDGECT';
        }
    }

    render() {
        //alert(this.props.data);
        //alert("switch");
        //alert(document.getElementById("list"));
        
        return (
            <section>
                <label>
                    <input className="item_input" type="text" ref={this.input} onKeyPress={this.onKeyUp}  data={this.state.enter}/>
                </label>
                <div>
                    {this.renderSwitch()}
                </div>
            </section>
        );
    }
}

export default SW;

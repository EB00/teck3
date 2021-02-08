import React, { Component } from 'react';
import '../App';
import '../css/body.css';
import Widgect from '../components/Widgect.js'


class Home extends React.Component {
    render() {
        return (
            <div className="Dhomme">
                <div className='Pos'>
                    <div className="HomeDiv"> <Widgect int="0"/> </div>
                    <div className="HomeDiv"> <Widgect int="1"/> </div>
                    <div className="HomeDiv"> <Widgect int="2"/> </div>
                    <div className="HomeDiv"> <Widgect int="3"/> </div>
                    <div className="HomeDiv"> <Widgect int="4"/> </div>
                    <div className="HomeDiv"> <Widgect int="5"/> </div>
                </div>
            </div>
        );
    }
}

export default Home;
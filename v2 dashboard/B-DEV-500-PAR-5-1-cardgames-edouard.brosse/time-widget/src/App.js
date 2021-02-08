import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';


function Dealwit() {
  var temp;
  var num = 1234;
  let [responseObj, setResponseObj] = useState({});
  fetch("http://worldtimeapi.org/api/timezone/Europe/Lisbon")
  .then(response => response.json())
  .then(response => {setResponseObj(response)});
  //temp = JSON.stringify(temporal);
  //temp = temp + temp
  temp = JSON.stringify(responseObj);
  if (temp) {
    num = 14;
  }
  return (temp)
}

 function App() {
  const temp = Dealwit()
  var temporal = JSON.parse(temp);
  var todisp = temporal["timezone"];
  var todisp2 = temporal["datetime"]
  return (
    <div className="App">
        <p>
          {todisp}
        </p>
        <p>
          {todisp2}
        </p>
    </div>
  );
}



export default App;
import logo from './logo.svg';
import './App.css';
import React from 'react';
//import { Provider } from 'react-redux'
//***********|  |**********///
import Home from './screens/home.js'
import Login from './screens/login.js';
//import Login from './screens/login.js';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav.js';
import './css/body.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div >
          <Nav/>
          <div id="body">
            <div id="display_body">
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/Login" component={Login}/>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;

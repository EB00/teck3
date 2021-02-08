import React from 'react';
import PropTypes from 'prop-types';
import Clock from 'react-live-clock';
import moment from 'react-moment';
//import 'moment-timezone';


function refreshPage() {
  window.location.reload();
}

class TimeWidget extends React.Component {
  //static propTypes = {
  //  timezone: PropTypes.string
  //};
  
  constructor(props) {
    super(props);
    this.state = {
      timezone: "Uk/London",
      get: this.props.data,
    };
    this.checkValue = this.checkValue.bind(this);
    this.checkValue();
  }


  checkValue(props) {
    //alert( "check heur");
    if(this.state.get !== " ") {
      this.setState({get: this.state.get});
      //alert(this.state.timezone);
    }else {
      this.setState({get: "Australia/Sydney"})
    }
  }

  componentDidMount() {
    this.checkValue();
    this.setState({
      timezone: this.state.timezone
    });
  }

  render() {
    return (
      <div id="time-container">
        <p>time zone: {this.state.get}</p>
          <p>
            <Clock format={'HH:mm:ss'} interval={1000} ticking={true} timezone={this.state.get}/>
          </p>
      </div>
    );
  }
}

export default TimeWidget;
//<p><Clock format={'HH:mm:ss'} interval={1000} ticking={true} timezone="US/PacifiC"/></p>

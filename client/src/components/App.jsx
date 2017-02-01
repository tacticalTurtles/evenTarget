import Nav from './Nav.jsx';
import Search from './Search.jsx';
import EventList from './EventList.jsx';
// import eventData from '../data/data.js'; //remove later
import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      currentEvent: null
    };
  }

  componentWillMount() {
	//sets the current events in the state array to the data we aquire (x10)
    // this.state.events = eventData;
  }

  //changes this event to the clicked event when a file is clicked
  handleEventClick(event) {
    this.state({
      currentEvent: event
    });
  }

  getEvents(query) {
    var options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        term: query,
        location: 'San Francisco'
      })
    };

    fetch('/getData', options)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        this.setState({
          'events': data
        })
      })

  }

  render() {
    return (
      <div>
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <Nav />
          <Search getEvents={this.getEvents.bind(this)} />
          <EventList events={this.state.events} handleEventClick={this.handleEventClick} />
        </div>
      </div>
    );
  }
}

// window.App = App;
export default App;

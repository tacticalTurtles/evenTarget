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

    $.get('/getData', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).done((data) => {
      console.log(data);
      this.setState({
        events: data
      });
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });

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

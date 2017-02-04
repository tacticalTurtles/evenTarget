import Nav from './Nav.jsx';
import Search from './Search.jsx';
import EventList from './EventList.jsx';
import CurrentEvent from './CurrentEvent.jsx';
import Bookmarks from './Bookmarks.jsx';
// import eventData from '../data/data.js'; //remove later
import React from 'react';
import { connect } from "react-redux";
import $ from 'jquery';
import * as app from '../redux/actions/appActions.js';

@connect((store) => {
  return {
    bookmarks: store.app.bookmarks,
    tempBookmarks: store.app.tempBookmarks,
    events: store.app.events,
    tempEvents: store.app.tempEvents,
    currentEvent: store.app.currentEvent
  };
})
class App extends React.Component {

  componentDidMount() {
	//sets the current events in the state array to the data we aquire (x10)
    // this.state.events = eventData;

  }

  //changes this event to the clicked event when a file is clicked
  handleEventClick(event) {
    let {dispatch} = this.props;
    dispatch(app.handleEventClick(event));
  }



  addToBookmarks(event) {
    let {dispatch} = this.props;
    dispatch(app.addToBookmarks(event));
  }

  showHome() {
    let {dispatch} = this.props;
    dispatch(app.showHome());
  }

  showBookmarks() {
    let {dispatch} = this.props;
    dispatch(app.showBookmarks());
  }

// posts to server side '/getData' sending two params {term: 'search', location: 'location'}
  getEvents(query) {
    let {dispatch} = this.props;
    dispatch(app.getEvents(query));
  }

  render() {
    return (
      <div>
        <div className="col-md-3"></div>
        <div className="col-md-6 entry-list">
          <Nav showBookmarks={this.showBookmarks.bind(this)}
		  showHome={this.showHome.bind(this)}/>
          {this.props.children}
          <Search getEvents={this.getEvents.bind(this)} />
          <EventList events={this.props.events}
		  handleEventClick={this.handleEventClick.bind(this)}
		  addToBookmarks={this.addToBookmarks.bind(this)}/>
          <CurrentEvent event={this.props.currentEvent} />
          <Bookmarks events={this.props.bookmarks}
		  handleEventClick={this.handleEventClick.bind(this)}/>
        </div>
      </div>
    );
  }
};

export default App;

// import yelp from 'yelp';
// //import the yelp class from yelp.jsx
// import EventList from 'EventList';
// import Nav from 'Nav';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      currentEvent: null
    };
  }

  //called when the app is done mounting in the life cycle
  componentDidMount() {
  	//sets the current events in the state array to the data we aquire (x10)
    this.state.events = eventData;
  	// yelp.search({ term: 'food', location: 'Montreal' })
  	// .then(function (data) {
  	//   this.state.events = data;
  	// })
  	// .catch(function (err) {
  	//   console.error(err);
  	// });
  }

  //changes this event to the clicked event when a file is clicked
  handleEventClick(event) {
  	this.state({
  		currentEvent: event
  	})
  }

  getEvents(query) {

  }

  //the render function which will be ran when something in the state is changed
  render() {
  	return(
  		<div>
        <Nav
          handleSearchInputChange={this.getEvents.bind(this)}
        />
        <div className="col-md-7">
        </div>
        <div className="col-md-5">
          <EventList
          	//passes down these props down to the eventList file
            events={this.state.events}
            handleEventClick={this.handleEventClick}
          />
        </div>
      </div>
    );
  }
};

//exports the app file to the next file
window.App = App;
// export {App};
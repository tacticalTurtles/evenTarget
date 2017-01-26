// import EventEntry from 'EventEntry';

var EventList = ({events, handleEventClick}) => (
  <div className="event-list media">
    {events.map((event) =>
      //makes an event entry for each event in the events file (should be 10)
      <EventEntry
      //passes down the click prop as well as the actual event
        event={event}
        handleEventClick={handleEventClick}
      />
    )}
  </div>
);

EventList.propTypes = {
  events: React.PropTypes.array.isRequired
};

window.EventList = EventList;
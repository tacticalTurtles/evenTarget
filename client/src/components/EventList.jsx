import EventEntry from './EventEntry.jsx';

var EventList = ({events, handleEventClick}) => {
  return (
    <div className="event-list media">
      {events.map( (event) => {
        console.log(event);

        //makes an event entry for each event in the events file (should be 10)
        return (<EventEntry
        //passes down the click prop as well as the actual event
        event={event.businesses[0]}
        handleEventClick={handleEventClick}
        />)
      })}
    </div>
  )
};

EventList.propTypes = {
  events: React.PropTypes.array.isRequired
};

export default EventList;
// window.EventList = EventList;
// export {EventList};
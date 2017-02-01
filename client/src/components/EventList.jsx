import EventEntry from './EventEntry.jsx';

var EventList = ({events, handleEventClick}) => {
  return (
    <div className="event-list media">
      {events.map( (event) => {
        return (
          <EventEntry event={event.businesses[0]} handleEventClick={handleEventClick} />);
      })}
    </div>
  );
};

EventList.propTypes = {
  events: React.PropTypes.array.isRequired
};

export default EventList;
// window.EventList = EventList;
// export {EventList};

var EventEntry = ({event, handleEventClick}) => {
  return (
    <div className="event-entry">
      <div>
        <img src={event.snippet_image_url} alt="IMG" />
      </div>
      <div>
        <div className="event-entry-title" onClick={() => handleEventClick(event)}>
          {event.name}
        </div>
        <div className="event-entry-detail">
          {event.snippet_text}
        </div>
      </div>
      <div className='event-entry-location'>
        {`${event.location.address1} ${event.location.city}
        ${event.location.state_code}, ${event.location.postal_code}` }
      </div>
    </div>
  );
};

EventEntry.propTypes = {
  event: React.PropTypes.object.isRequired
};

export default EventEntry;
// window.EventEntry = EventEntry;
// export {EventEntry};

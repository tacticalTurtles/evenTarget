var EventEntry = ({event, handleEventClick}) => (
  <div className="event-entry">
    <div className="media-left media-middle">
      <img className="media-object" src={event.snippet_image_url} alt="" />
    </div>
    <div className="media-body">
      <div 
        //click handler, will set the current event to the clicked event
        className="event-entry-title"
        onClick={() => handleEventClick(event)}
        //the code below will render the detail, as well as the addresss of the event
      >
        {event.name}
      </div>
      <div className="event-entry-detail">{event.snippet_text}</div>
    </div>
    <div className='event-entry-location'> {`${event.location.address[0]} ${event.location.city} 
    ${event.location.state_code}, ${event.location.postal_code}` }
    </div>
  </div>
);

EventEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

window.EventEntry = EventEntry;
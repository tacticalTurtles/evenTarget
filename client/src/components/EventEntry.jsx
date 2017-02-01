import React from 'react';

var EventEntry = ({event, handleEventClick}) => {
  var desc = '';
  for (let category of event.categories) {
    desc += category[0] + ' ';
  }

  return (
    <div className="event-entry">
      <div>
        <img src={event.image_url} alt="IMG" />
      </div>
      <div>
        <div className="event-entry-title" onClick={() => handleEventClick(event)}>
          {event.name}
        </div>
        <div className="event-entry-detail">
          {desc}
        </div>
      </div>
      <div className='event-entry-location'>
        {`${event.location.address[0]} ${event.location.city}
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

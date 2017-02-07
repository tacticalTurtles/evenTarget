import React from 'react';


var EventEntry = ({event, handleEventClick, addToBookmarks}) => {

  return (
    <div className="event-entry">
        <img src={event.image} alt="IMG" />
        <div className="event-entry-title" onClick={() => handleEventClick(event)}>
          {event.name}
        </div>
        <div className="event-entry-detail">
          {event.description}
        </div>
        <div className='event-entry-location'>
        {event.location}
        </div>
        <div className="glyphicon glyphicon-plus" onClick={() => addToBookmarks(event)}></div>
        <div></div>
      </div>
  );
};

EventEntry.propTypes = {
  event: React.PropTypes.object.isRequired
};

export default EventEntry;

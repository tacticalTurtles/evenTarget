import React from 'react';


var EventEntry = ({event, handleEventClick, addToBookmarks}) => {
  var desc = '';
  for (let category of event.categories) {
    desc += category[0] + ' ';
  }

  return (
    <div className="event-entry">
      <div>
        <img src={event.image} alt="IMG" />
      </div>
      <div>
        <div className="event-entry-title" onClick={() => handleEventClick(event)}>
          {event.name}
        </div>
        <div className="event-entry-detail">
          {event.description}
        </div>
      </div>
      <div className='event-entry-location'>
        {event.location}
      </div>
      <span className="glyphicon glyphicon-plus" onClick={() => addToBookmarks(event)}></span>
    </div>
  );
};

EventEntry.propTypes = {
  event: React.PropTypes.object.isRequired
};

export default EventEntry;

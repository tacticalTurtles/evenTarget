import React from 'react';
import EventEntry from './EventEntry.jsx';

var EventList = ({events, handleEventClick, addToBookmarks}) => {
  return (
    <div className="event-list media">
      {events.map( (event) => {
        return (
          <EventEntry
            event={event}
            handleEventClick={handleEventClick}
            addToBookmarks={addToBookmarks}
          />
        );
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

import React from 'react';
import EventEntry from './EventEntry.jsx';

var Bookmarks = ({events, handleEventClick}) => {
  return (
  <div className="event-list">
    {events.map( (event, i) => {
      return (
        <EventEntry
          key={i}
          event={event}
          handleEventClick={handleEventClick.bind(this)}
        />
      );
    })}
  </div>
  )
}

export default Bookmarks;

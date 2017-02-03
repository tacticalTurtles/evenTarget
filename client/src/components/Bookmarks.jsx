import React from 'react';
import EventEntry from './EventEntry.jsx';

var Bookmarks = ({events, handleEventClick}) => {
  return (
  <div className="col-md-6 col-md-offset-3">
    {events.map( (event) => {
      return (
        <EventEntry
          event={event}
          handleEventClick={handleEventClick.bind(this)}
        />
      );
    })}
  </div>
  )
}

export default Bookmarks;

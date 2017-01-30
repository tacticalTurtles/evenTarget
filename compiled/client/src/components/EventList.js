"use strict";

// import EventEntry from 'EventEntry';

var EventList = function EventList(_ref) {
  var events = _ref.events,
      handleEventClick = _ref.handleEventClick;
  return React.createElement(
    "div",
    { className: "event-list media" },
    events.map(function (event) {
      return (
        //makes an event entry for each event in the events file (should be 10)
        React.createElement(EventEntry
        //passes down the click prop as well as the actual event
        , { event: event,
          handleEventClick: handleEventClick
        })
      );
    })
  );
};

EventList.propTypes = {
  events: React.PropTypes.array.isRequired
};

window.EventList = EventList;
// export {EventList};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9FdmVudExpc3QuanN4Il0sIm5hbWVzIjpbIkV2ZW50TGlzdCIsImV2ZW50cyIsImhhbmRsZUV2ZW50Q2xpY2siLCJtYXAiLCJldmVudCIsInByb3BUeXBlcyIsIlJlYWN0IiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQUlBLFlBQVksU0FBWkEsU0FBWTtBQUFBLE1BQUVDLE1BQUYsUUFBRUEsTUFBRjtBQUFBLE1BQVVDLGdCQUFWLFFBQVVBLGdCQUFWO0FBQUEsU0FDZDtBQUFBO0FBQUEsTUFBSyxXQUFVLGtCQUFmO0FBQ0dELFdBQU9FLEdBQVAsQ0FBVyxVQUFDQyxLQUFEO0FBQUE7QUFDVjtBQUNBLDRCQUFDO0FBQ0Q7QUFEQSxZQUVFLE9BQU9BLEtBRlQ7QUFHRSw0QkFBa0JGO0FBSHBCO0FBRlU7QUFBQSxLQUFYO0FBREgsR0FEYztBQUFBLENBQWhCOztBQWFBRixVQUFVSyxTQUFWLEdBQXNCO0FBQ3BCSixVQUFRSyxNQUFNQyxTQUFOLENBQWdCQyxLQUFoQixDQUFzQkM7QUFEVixDQUF0Qjs7QUFJQUMsT0FBT1YsU0FBUCxHQUFtQkEsU0FBbkI7QUFDQSIsImZpbGUiOiJFdmVudExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgRXZlbnRFbnRyeSBmcm9tICdFdmVudEVudHJ5JztcblxudmFyIEV2ZW50TGlzdCA9ICh7ZXZlbnRzLCBoYW5kbGVFdmVudENsaWNrfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50LWxpc3QgbWVkaWFcIj5cbiAgICB7ZXZlbnRzLm1hcCgoZXZlbnQpID0+XG4gICAgICAvL21ha2VzIGFuIGV2ZW50IGVudHJ5IGZvciBlYWNoIGV2ZW50IGluIHRoZSBldmVudHMgZmlsZSAoc2hvdWxkIGJlIDEwKVxuICAgICAgPEV2ZW50RW50cnlcbiAgICAgIC8vcGFzc2VzIGRvd24gdGhlIGNsaWNrIHByb3AgYXMgd2VsbCBhcyB0aGUgYWN0dWFsIGV2ZW50XG4gICAgICAgIGV2ZW50PXtldmVudH1cbiAgICAgICAgaGFuZGxlRXZlbnRDbGljaz17aGFuZGxlRXZlbnRDbGlja31cbiAgICAgIC8+XG4gICAgKX1cbiAgPC9kaXY+XG4pO1xuXG5FdmVudExpc3QucHJvcFR5cGVzID0ge1xuICBldmVudHM6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59O1xuXG53aW5kb3cuRXZlbnRMaXN0ID0gRXZlbnRMaXN0O1xuLy8gZXhwb3J0IHtFdmVudExpc3R9OyJdfQ==
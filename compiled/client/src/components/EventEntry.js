"use strict";

var EventEntry = function EventEntry(_ref) {
  var event = _ref.event,
      handleEventClick = _ref.handleEventClick;
  return React.createElement(
    "div",
    { className: "event-entry" },
    React.createElement(
      "div",
      { className: "media-left media-middle" },
      React.createElement("img", { className: "media-object", src: event.snippet_image_url, alt: "" })
    ),
    React.createElement(
      "div",
      { className: "media-body" },
      React.createElement(
        "div",
        {
          //click handler, will set the current event to the clicked event
          className: "event-entry-title",
          onClick: function onClick() {
            return handleEventClick(event);
          }
          //the code below will render the detail, as well as the addresss of the event
        },
        event.name
      ),
      React.createElement(
        "div",
        { className: "event-entry-detail" },
        event.snippet_text
      )
    ),
    React.createElement(
      "div",
      { className: "event-entry-location" },
      " ",
      event.location.address[0] + " " + event.location.city + " \n    " + event.location.state_code + ", " + event.location.postal_code
    )
  );
};

EventEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

window.EventEntry = EventEntry;
// export {EventEntry};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9FdmVudEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJFdmVudEVudHJ5IiwiZXZlbnQiLCJoYW5kbGVFdmVudENsaWNrIiwic25pcHBldF9pbWFnZV91cmwiLCJuYW1lIiwic25pcHBldF90ZXh0IiwibG9jYXRpb24iLCJhZGRyZXNzIiwiY2l0eSIsInN0YXRlX2NvZGUiLCJwb3N0YWxfY29kZSIsInByb3BUeXBlcyIsInZpZGVvIiwiUmVhY3QiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLGFBQWEsU0FBYkEsVUFBYTtBQUFBLE1BQUVDLEtBQUYsUUFBRUEsS0FBRjtBQUFBLE1BQVNDLGdCQUFULFFBQVNBLGdCQUFUO0FBQUEsU0FDZjtBQUFBO0FBQUEsTUFBSyxXQUFVLGFBQWY7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLHlCQUFmO0FBQ0UsbUNBQUssV0FBVSxjQUFmLEVBQThCLEtBQUtELE1BQU1FLGlCQUF6QyxFQUE0RCxLQUFJLEVBQWhFO0FBREYsS0FERjtBQUlFO0FBQUE7QUFBQSxRQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQ0EscUJBQVUsbUJBRlo7QUFHRSxtQkFBUztBQUFBLG1CQUFNRCxpQkFBaUJELEtBQWpCLENBQU47QUFBQTtBQUNUO0FBSkY7QUFNR0EsY0FBTUc7QUFOVCxPQURGO0FBU0U7QUFBQTtBQUFBLFVBQUssV0FBVSxvQkFBZjtBQUFxQ0gsY0FBTUk7QUFBM0M7QUFURixLQUpGO0FBZUU7QUFBQTtBQUFBLFFBQUssV0FBVSxzQkFBZjtBQUFBO0FBQTJDSixZQUFNSyxRQUFOLENBQWVDLE9BQWYsQ0FBdUIsQ0FBdkIsQ0FBM0MsU0FBd0VOLE1BQU1LLFFBQU4sQ0FBZUUsSUFBdkYsZUFDRVAsTUFBTUssUUFBTixDQUFlRyxVQURqQixVQUNnQ1IsTUFBTUssUUFBTixDQUFlSTtBQUQvQztBQWZGLEdBRGU7QUFBQSxDQUFqQjs7QUFzQkFWLFdBQVdXLFNBQVgsR0FBdUI7QUFDckJDLFNBQU9DLE1BQU1DLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQztBQURULENBQXZCOztBQUlBQyxPQUFPakIsVUFBUCxHQUFvQkEsVUFBcEI7QUFDQSIsImZpbGUiOiJFdmVudEVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEV2ZW50RW50cnkgPSAoe2V2ZW50LCBoYW5kbGVFdmVudENsaWNrfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50LWVudHJ5XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1sZWZ0IG1lZGlhLW1pZGRsZVwiPlxuICAgICAgPGltZyBjbGFzc05hbWU9XCJtZWRpYS1vYmplY3RcIiBzcmM9e2V2ZW50LnNuaXBwZXRfaW1hZ2VfdXJsfSBhbHQ9XCJcIiAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgPGRpdiBcbiAgICAgICAgLy9jbGljayBoYW5kbGVyLCB3aWxsIHNldCB0aGUgY3VycmVudCBldmVudCB0byB0aGUgY2xpY2tlZCBldmVudFxuICAgICAgICBjbGFzc05hbWU9XCJldmVudC1lbnRyeS10aXRsZVwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUV2ZW50Q2xpY2soZXZlbnQpfVxuICAgICAgICAvL3RoZSBjb2RlIGJlbG93IHdpbGwgcmVuZGVyIHRoZSBkZXRhaWwsIGFzIHdlbGwgYXMgdGhlIGFkZHJlc3NzIG9mIHRoZSBldmVudFxuICAgICAgPlxuICAgICAgICB7ZXZlbnQubmFtZX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudC1lbnRyeS1kZXRhaWxcIj57ZXZlbnQuc25pcHBldF90ZXh0fTwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPSdldmVudC1lbnRyeS1sb2NhdGlvbic+IHtgJHtldmVudC5sb2NhdGlvbi5hZGRyZXNzWzBdfSAke2V2ZW50LmxvY2F0aW9uLmNpdHl9IFxuICAgICR7ZXZlbnQubG9jYXRpb24uc3RhdGVfY29kZX0sICR7ZXZlbnQubG9jYXRpb24ucG9zdGFsX2NvZGV9YCB9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuRXZlbnRFbnRyeS5wcm9wVHlwZXMgPSB7XG4gIHZpZGVvOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbndpbmRvdy5FdmVudEVudHJ5ID0gRXZlbnRFbnRyeTtcbi8vIGV4cG9ydCB7RXZlbnRFbnRyeX07Il19
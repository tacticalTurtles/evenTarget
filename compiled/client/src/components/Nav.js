"use strict";

// import Search from 'Search';

var Nav = function Nav(_ref) {
  var handleSearchInputChange = _ref.handleSearchInputChange;
  return React.createElement(
    "nav",
    { className: "navbar" },
    React.createElement(
      "div",
      { className: "col-md-6 col-md-offset-3" },
      React.createElement(Search, { handleSearchInputChange: handleSearchInputChange })
    )
  );
};

window.Nav = Nav;
// export {Nav};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9OYXYuanN4Il0sIm5hbWVzIjpbIk5hdiIsImhhbmRsZVNlYXJjaElucHV0Q2hhbmdlIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQUlBLE1BQU0sU0FBTkEsR0FBTTtBQUFBLE1BQUVDLHVCQUFGLFFBQUVBLHVCQUFGO0FBQUEsU0FDUjtBQUFBO0FBQUEsTUFBSyxXQUFVLFFBQWY7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLDBCQUFmO0FBQ0UsMEJBQUMsTUFBRCxJQUFRLHlCQUF5QkEsdUJBQWpDO0FBREY7QUFERixHQURRO0FBQUEsQ0FBVjs7QUFRQUMsT0FBT0YsR0FBUCxHQUFhQSxHQUFiO0FBQ0EiLCJmaWxlIjoiTmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFNlYXJjaCBmcm9tICdTZWFyY2gnO1xuXG52YXIgTmF2ID0gKHtoYW5kbGVTZWFyY2hJbnB1dENoYW5nZX0pID0+IChcbiAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1tZC1vZmZzZXQtM1wiPlxuICAgICAgPFNlYXJjaCBoYW5kbGVTZWFyY2hJbnB1dENoYW5nZT17aGFuZGxlU2VhcmNoSW5wdXRDaGFuZ2V9Lz5cbiAgICA8L2Rpdj5cbiAgPC9uYXY+XG4pO1xuXG53aW5kb3cuTmF2ID0gTmF2O1xuLy8gZXhwb3J0IHtOYXZ9OyJdfQ==
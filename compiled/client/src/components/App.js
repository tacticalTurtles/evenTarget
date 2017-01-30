"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import yelp from 'yelp';
// //import the yelp class from yelp.jsx
// import EventList from 'EventList';
// import Nav from 'Nav';

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      events: [],
      currentEvent: null
    };
    return _this;
  }

  //called when the app is done mounting in the life cycle


  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //sets the current events in the state array to the data we aquire (x10)
      this.state.events = eventData;
      // yelp.search({ term: 'food', location: 'Montreal' })
      // .then(function (data) {
      //   this.state.events = data;
      // })
      // .catch(function (err) {
      //   console.error(err);
      // });
    }

    //changes this event to the clicked event when a file is clicked

  }, {
    key: "handleEventClick",
    value: function handleEventClick(event) {
      this.state({
        currentEvent: event
      });
    }
  }, {
    key: "getEvents",
    value: function getEvents(query) {}

    //the render function which will be ran when something in the state is changed

  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Nav, {
          handleSearchInputChange: this.getEvents.bind(this)
        }),
        React.createElement("div", { className: "col-md-7" }),
        React.createElement(
          "div",
          { className: "col-md-5" },
          React.createElement(EventList
          //passes down these props down to the eventList file
          , { events: this.state.events,
            handleEventClick: this.handleEventClick
          })
        )
      );
    }
  }]);

  return App;
}(React.Component);

;

//exports the app file to the next file
window.App = App;
// export {App};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJldmVudHMiLCJjdXJyZW50RXZlbnQiLCJldmVudERhdGEiLCJldmVudCIsInF1ZXJ5IiwiZ2V0RXZlbnRzIiwiYmluZCIsImhhbmRsZUV2ZW50Q2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLEVBREc7QUFFWEMsb0JBQWM7QUFGSCxLQUFiO0FBSGlCO0FBT2xCOztBQUVEOzs7Ozt3Q0FDb0I7QUFDbkI7QUFDQyxXQUFLRixLQUFMLENBQVdDLE1BQVgsR0FBb0JFLFNBQXBCO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFRDs7OztxQ0FDaUJDLEssRUFBTztBQUN2QixXQUFLSixLQUFMLENBQVc7QUFDVkUsc0JBQWNFO0FBREosT0FBWDtBQUdBOzs7OEJBRVNDLEssRUFBTyxDQUVoQjs7QUFFRDs7Ozs2QkFDUztBQUNSLGFBQ0M7QUFBQTtBQUFBO0FBQ0ksNEJBQUMsR0FBRDtBQUNFLG1DQUF5QixLQUFLQyxTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEI7QUFEM0IsVUFESjtBQUlJLHFDQUFLLFdBQVUsVUFBZixHQUpKO0FBTUk7QUFBQTtBQUFBLFlBQUssV0FBVSxVQUFmO0FBQ0UsOEJBQUM7QUFDQTtBQURELGNBRUUsUUFBUSxLQUFLUCxLQUFMLENBQVdDLE1BRnJCO0FBR0UsOEJBQWtCLEtBQUtPO0FBSHpCO0FBREY7QUFOSixPQUREO0FBZ0JBOzs7O0VBcERlQyxNQUFNQyxTOztBQXFEdkI7O0FBRUQ7QUFDQUMsT0FBT2IsR0FBUCxHQUFhQSxHQUFiO0FBQ0EiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHllbHAgZnJvbSAneWVscCc7XG4vLyAvL2ltcG9ydCB0aGUgeWVscCBjbGFzcyBmcm9tIHllbHAuanN4XG4vLyBpbXBvcnQgRXZlbnRMaXN0IGZyb20gJ0V2ZW50TGlzdCc7XG4vLyBpbXBvcnQgTmF2IGZyb20gJ05hdic7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGV2ZW50czogW10sXG4gICAgICBjdXJyZW50RXZlbnQ6IG51bGxcbiAgICB9O1xuICB9XG5cbiAgLy9jYWxsZWQgd2hlbiB0aGUgYXBwIGlzIGRvbmUgbW91bnRpbmcgaW4gdGhlIGxpZmUgY3ljbGVcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIFx0Ly9zZXRzIHRoZSBjdXJyZW50IGV2ZW50cyBpbiB0aGUgc3RhdGUgYXJyYXkgdG8gdGhlIGRhdGEgd2UgYXF1aXJlICh4MTApXG4gICAgdGhpcy5zdGF0ZS5ldmVudHMgPSBldmVudERhdGE7XG4gIFx0Ly8geWVscC5zZWFyY2goeyB0ZXJtOiAnZm9vZCcsIGxvY2F0aW9uOiAnTW9udHJlYWwnIH0pXG4gIFx0Ly8gLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgXHQvLyAgIHRoaXMuc3RhdGUuZXZlbnRzID0gZGF0YTtcbiAgXHQvLyB9KVxuICBcdC8vIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gIFx0Ly8gICBjb25zb2xlLmVycm9yKGVycik7XG4gIFx0Ly8gfSk7XG4gIH1cblxuICAvL2NoYW5nZXMgdGhpcyBldmVudCB0byB0aGUgY2xpY2tlZCBldmVudCB3aGVuIGEgZmlsZSBpcyBjbGlja2VkXG4gIGhhbmRsZUV2ZW50Q2xpY2soZXZlbnQpIHtcbiAgXHR0aGlzLnN0YXRlKHtcbiAgXHRcdGN1cnJlbnRFdmVudDogZXZlbnRcbiAgXHR9KVxuICB9XG5cbiAgZ2V0RXZlbnRzKHF1ZXJ5KSB7XG5cbiAgfVxuXG4gIC8vdGhlIHJlbmRlciBmdW5jdGlvbiB3aGljaCB3aWxsIGJlIHJhbiB3aGVuIHNvbWV0aGluZyBpbiB0aGUgc3RhdGUgaXMgY2hhbmdlZFxuICByZW5kZXIoKSB7XG4gIFx0cmV0dXJuKFxuICBcdFx0PGRpdj5cbiAgICAgICAgPE5hdlxuICAgICAgICAgIGhhbmRsZVNlYXJjaElucHV0Q2hhbmdlPXt0aGlzLmdldEV2ZW50cy5iaW5kKHRoaXMpfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC03XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XG4gICAgICAgICAgPEV2ZW50TGlzdFxuICAgICAgICAgIFx0Ly9wYXNzZXMgZG93biB0aGVzZSBwcm9wcyBkb3duIHRvIHRoZSBldmVudExpc3QgZmlsZVxuICAgICAgICAgICAgZXZlbnRzPXt0aGlzLnN0YXRlLmV2ZW50c31cbiAgICAgICAgICAgIGhhbmRsZUV2ZW50Q2xpY2s9e3RoaXMuaGFuZGxlRXZlbnRDbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cbi8vZXhwb3J0cyB0aGUgYXBwIGZpbGUgdG8gdGhlIG5leHQgZmlsZVxud2luZG93LkFwcCA9IEFwcDtcbi8vIGV4cG9ydCB7QXBwfTsiXX0=
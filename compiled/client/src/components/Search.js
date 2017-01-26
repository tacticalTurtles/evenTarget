"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.state = {
      value: ''
    };
    return _this;
  }

  //anytime the value of the search bar changes, we change the state.value to the bar
  //and call the handleSearchInputChange with the value as the parameter


  _createClass(Search, [{
    key: "handleInputChange",
    value: function handleInputChange(e) {
      this.props.handleSearchInputChange(e.target.value);
      this.setState({
        value: e.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "search-bar form-inline" },
        React.createElement("input", {
          className: "form-control",
          type: "text",
          value: this.state.value,
          onChange: this.handleInputChange.bind(this)
        }),
        React.createElement(
          "button",
          { className: "btn hidden-sm-down" },
          React.createElement("span", { className: "glyphicon glyphicon-search" })
        )
      );
    }
  }]);

  return Search;
}(React.Component);

;

window.Search = Search;
// export {Search};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9TZWFyY2guanN4Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwic3RhdGUiLCJ2YWx1ZSIsImUiLCJoYW5kbGVTZWFyY2hJbnB1dENoYW5nZSIsInRhcmdldCIsInNldFN0YXRlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsTTs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU87QUFESSxLQUFiO0FBSGlCO0FBTWxCOztBQUVEO0FBQ0E7Ozs7O3NDQUNrQkMsQyxFQUFHO0FBQ25CLFdBQUtILEtBQUwsQ0FBV0ksdUJBQVgsQ0FBbUNELEVBQUVFLE1BQUYsQ0FBU0gsS0FBNUM7QUFDQSxXQUFLSSxRQUFMLENBQWM7QUFDWkosZUFBT0MsRUFBRUUsTUFBRixDQUFTSDtBQURKLE9BQWQ7QUFHRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHdCQUFmO0FBQ0U7QUFDRSxxQkFBVSxjQURaO0FBRUUsZ0JBQUssTUFGUDtBQUdFLGlCQUFPLEtBQUtELEtBQUwsQ0FBV0MsS0FIcEI7QUFJRSxvQkFBVSxLQUFLSyxpQkFBTCxDQUF1QkMsSUFBdkIsQ0FBNEIsSUFBNUI7QUFKWixVQURGO0FBT0U7QUFBQTtBQUFBLFlBQVEsV0FBVSxvQkFBbEI7QUFDRSx3Q0FBTSxXQUFVLDRCQUFoQjtBQURGO0FBUEYsT0FERjtBQWFEOzs7O0VBaENrQkMsTUFBTUMsUzs7QUFpQzFCOztBQUVEQyxPQUFPWixNQUFQLEdBQWdCQSxNQUFoQjtBQUNBIiwiZmlsZSI6IlNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH07XG4gIH1cblxuICAvL2FueXRpbWUgdGhlIHZhbHVlIG9mIHRoZSBzZWFyY2ggYmFyIGNoYW5nZXMsIHdlIGNoYW5nZSB0aGUgc3RhdGUudmFsdWUgdG8gdGhlIGJhclxuICAvL2FuZCBjYWxsIHRoZSBoYW5kbGVTZWFyY2hJbnB1dENoYW5nZSB3aXRoIHRoZSB2YWx1ZSBhcyB0aGUgcGFyYW1ldGVyXG4gIGhhbmRsZUlucHV0Q2hhbmdlKGUpIHtcbiAgICB0aGlzLnByb3BzLmhhbmRsZVNlYXJjaElucHV0Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXIgZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gaGlkZGVuLXNtLWRvd25cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFwiPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG53aW5kb3cuU2VhcmNoID0gU2VhcmNoO1xuLy8gZXhwb3J0IHtTZWFyY2h9OyJdfQ==
import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ''
    };
  }


  //anytime the value of the search bar changes, we change the state.value to the bar
  //and call the handleSearchInputChange with the value as the parameter
  handleInputChange(e) {
    // this.props.getEvents(e.target.value);
    this.setState({
      searchValue: e.target.value
    });
  }

  handleOnClick(e) {
    this.props.getEvents(this.state.searchValue);
    e.preventDefault();
    return false;
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <form onSubmit={this.handleOnClick.bind(this)}>
          <input
            className="form-control"
            type="text"
            value={this.state.searchValue}
            placeholder="find your target"
            onChange={this.handleInputChange.bind(this)}
          />
        <button onClick={this.handleOnClick.bind(this)}>Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
// window.Search = Search;
// export {Search};

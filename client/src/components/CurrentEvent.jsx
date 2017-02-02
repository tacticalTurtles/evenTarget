import React from 'react';

class CurrentEvent extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      comment: ''
    };
  }

  handleInputChange(e) {
    this.setState({
      comment: e.target.value
    });
  }

  handleOnClick(e) {
    var options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        comment: this.state.comment
      })
    };

    fetch('/postComment', options)
      .then((resp) => {
        console.log('posted')
      });
    this.setState({
      comment: ''
    });
    e.preventDefault();
  }


  render() {
    var desc = '';
    if(this.props.event) {

      // for (let category of this.props.event.categories) {
      //   desc += category[0] + ' ';
      // }

      return (
        <div className="event-entry">
          <div>
            <img src={this.props.event.image} alt="IMG" />
          </div>
          <div className= 'link'> 
            <a href={this.props.event.url}> link to website </a>
          </div>
          <div>
            <div className="event-entry-title" >
              {this.props.event.name}
            </div>
            <div className="event-entry-detail">
              {desc}
            </div>
          </div>
          <div className='event-entry-location'>
            {this.props.event.location}
          </div>
          <nav>
            <div className='comments'> 
              <img src={this.props.event.image} />
              {`: ${this.props.event.description}`}
            </div>
          </nav>
          <form onSubmit={this.handleOnClick.bind(this)}> 
            <input 
              className="form-control"
              type="text"
              value={this.state.searchValue}
              placeholder="insert comment here"
              onChange={this.handleInputChange.bind(this)}
            />
            <button
              type="button"
              onClick={this.handleOnClick.bind(this)}
              > enter comment
            </button>
          </form>
        </div>
      );
    } else {
        return null;
    }
  }
};

export default CurrentEvent;

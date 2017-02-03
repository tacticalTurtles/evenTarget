import React from 'react';
import {handleInputChange} from '../redux/actions/currentEventActions.js';
import {handleEventClick} from '../redux/actions/appActions.js';
import { connect } from "react-redux";

// @connect((store) => {
//   return {
//     comment: store.CurrentEvent.comment
//   };
// })
class CurrentEvent extends React.Component { 

  constructor(props) {
    super(props);

    this.state = {
      searchValue: ''
    };
  }

  handleInputChange(e) {
    this.setState({
      comment: e.target.value
    });
  }

  sendComment(e) {
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

      for (let category of this.props.event.categories) {
        desc += category[0] + ' ';
      }

      return (
        <div className="event-entry">
          <div>
            <img src={this.props.event.image_url} alt="IMG" />
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
            {`${this.props.event.location.address[0]} ${this.props.event.location.city}
            ${this.props.event.location.state_code}, ${this.props.event.location.postal_code}` }
          </div>
          <nav>
            <div className='comments'> 
              <img src={this.props.event.snippet_image_url} />
              {`: ${this.props.event.snippet_text}`}
            </div>
          </nav>
          <form onSubmit={this.sendComment.bind(this)}> 
            <input 
              className="form-control"
              type="text"
              value={this.state.comment}
              placeholder="insert comment here"
              onChange={this.handleInputChange.bind(this)}
            />
            <button
              type="button"
              onClick={this.sendComment.bind(this)}
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

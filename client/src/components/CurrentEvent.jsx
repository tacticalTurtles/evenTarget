import React from 'react';
import {handleInputChange} from '../redux/actions/currentEventActions.js';
import {handleEventClick} from '../redux/actions/appActions.js';
import { connect } from 'react-redux';

// @connect((store) => {
//   return {
//     comment: store.CurrentEvent.comment
//   };
// })
class CurrentEvent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      comment: '',
      comments: [],
      comfort: 0,
      comfortNumber: 0
    };
  }

  handleInputChange(e) {
    this.setState({
      comment: e.target.value
    });
  }
  componentWillMount() {
    this.getComments();
    this.getComfortLevel();
  }

  componentDidUpdate() {
    this.getComments();
    // this.getComfortLevel();
  }

  getComments() {
    var options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        getEventid: this.props.event.id
      })
    };

    fetch('/getcomments', options)
      .then((resp) => {
        return resp.json();
      })
      .then((comments) => {
        var newComments = [];
        for (var i = 0; i < comments.length; i++) {
          newComments.push(comments[i].comment);
        }
        this.setState({
          comments: newComments
        });
      })
      .catch((err) => {
        throw err;
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
        comment: this.state.comment,
        eventid: this.props.event.id
      })
    };

    fetch('/postcomment', options)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        // console log here to test
      })
      .catch((error) => {
        throw error;
      });

    this.setState({
      comment: ''
    });
    e.preventDefault();
    console.log('posted');
  }

  setComfortLevel(e) {
    var options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        comfort: e.target.value,
        id: this.props.event.id
      })
    };
    fetch('/postComfort', options)
      .then((resp) => {
        console.log('posted');
      });
    e.preventDefault();
  }

  getComfortLevel() {
    var options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.props.event.id
      })
    };
    fetch('/getComfort', options)
      .then((resp) => {
        return resp.json()
      }).then((resp) => {
        this.setState({
          comfort: resp.comfort,
          comfortNumber: resp.comfortNumber
        })
      })
  }

  render() {
    var desc = '';
    if (this.props.event.id) {
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
            {this.props.event.location.address[0]}
          </div>
          <div className='comfortDisplay'>
            comfort level: {this.state.comfort}, Number of ratings: {this.state.comfortNumber}
          <div id='emotion'>
            <label> comfort level </label>
            <input type='radio' name='comfort' value='1' onClick={this.setComfortLevel.bind(this)}/>
              <label ><img src='./data/pukingFace.png' /> </label>
            <input type='radio' name='comfort' value='2' onClick={this.setComfortLevel.bind(this)}/>
              <label ><img src='data/2.jpeg' /> </label>
            <input type='radio' name='comfort' value='3' onClick={this.setComfortLevel.bind(this)}/>
              <label ><img src='data/3.png' /> </label>
            <input type='radio' name='comfort' value='4' onClick={this.setComfortLevel.bind(this)}/>
              <label ><img src='data/4.jpg' /> </label>
            <input type='radio' name='comfort' value = '5' onClick={this.setComfortLevel.bind(this)}/>
              <label ><img src='data/5.png' /> </label>
          </div>
          <nav>
            <div className='comments'>
              <img src={this.props.event.image} />
              {`: ${this.props.event.description}`}
            </div>
          </nav>
          <ul className="list-group">
            {this.state.comments.map( (comment) => {
              return (
                <li className="list-group-item">{comment}</li>
              );
            })}
          </ul>
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
}

export default CurrentEvent;


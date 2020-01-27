import React, { Component } from 'react';

class Supported extends Component {

  state = {
    feedback: {
        feeling: 0,
        understanding: 0,
        supported: 0,
        comments: ''
    },
  };
  
  handleSupportedChange = (event) => {
    console.log(event.target.value);
    this.setState({
        feedback: {
            ...this.state.supported,
            supported: event.target.value
        },
    });
  }
  
  handleClick = () => {
    // alert('you are headed to leave comments');
    ///CHANGE LOCATION???
    this.props.history.push('/Comments')
  }

  render() {
    return (
      <div>
        <h1>How well are you being Supported?</h1>
        <input onChange={this.handleSupportedChange} type="number" placeholder="Choose between 1 to 5" />
        <button onClick={this.handleClick}>NEXT</button>
      </div>
    )
  }
}

export default Supported;
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ImageSlider extends Component {
  state = {
    images: [
      "https://images.unsplash.com/photo-1559726950-9bae0f643f86?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1539807134273-f97ed182b488?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1590091194890-7aa6462b82dd?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1617571736695-5127086fb2af?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU0fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    ],
    index: 0,
  };

  handleNext = () => {
    this.setState({
      index: this.state.index + 1,
    });
  };

  handlePrevious = () => {
    this.setState({
      index: this.state.index - 1,
    });
  };

  render() {
    return (
      <div>
        <button className='previous-btn' onClick={this.handlePrevious}>
          Previous
        </button>
        <img className='images' src={this.state.images[this.state.index]}></img>
        <button className='next-btn' onClick={this.handleNext}>
          Next
        </button>
      </div>
    );
  }
}

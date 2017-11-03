import React, { Component } from 'react';

export default class Slide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slide: 1
    };

    this.forwardSlide = this.forwardSlide.bind(this);
    this.backSlide = this.backSlide.bind(this);
  }

  forwardSlide() {
    let nextSlide = this.state.slide + 1;
    this.setState({ slide: nextSlide });
  }

  backSlide() {
    if (this.state === 1) {
      return;
    } else {
      let lastSlide = this.state.slide - 1;
      this.setState({ slide: lastSlide });
    }
  }

  render() {
    let slide = this.state.slide;
    console.log(slide);
    let slideUrl = `https://s3-us-west-2.amazonaws.com/bighorn/marketingslides/slide${slide}.png`;
    return (
      <div className="presentation">
        <i className="fa fa-arrow-left left" onClick={this.backSlide} />
        <i className="fa fa-arrow-right right" onClick={this.forwardSlide} />
        <img src={slideUrl} alt="slide" className="slide" />
      </div>
    );
  }
}

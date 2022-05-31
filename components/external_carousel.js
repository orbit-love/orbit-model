import React from "react";
import { Carousel } from "react-responsive-carousel";
import Slide1 from "components/slides/slide1";
import Slide2 from "components/slides/slide2";
import Slide3 from "components/slides/slide3";
import Slide4 from "components/slides/slide4";
import Slide5 from "components/slides/slide5";
import Slide6 from "components/slides/slide6";
import Slide7 from "components/slides/slide7";

export default class ExternalCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0,
      autoPlay: false,
    };
  }

  next = () => {
    this.setState((state) => ({
      currentSlide: state.currentSlide + 1,
    }));
  };

  prev = () => {
    this.setState((state) => ({
      currentSlide: state.currentSlide - 1,
    }));
  };

  changeAutoPlay = () => {
    this.setState((state) => ({
      autoPlay: !state.autoPlay,
    }));
  };

  updateCurrentSlide = (index) => {
    const { currentSlide } = this.state;

    if (currentSlide !== index) {
      this.setState({
        currentSlide: index,
      });
    }
  };

  render() {
    return (
      <div>
        <Carousel
          autoPlay={this.state.autoPlay}
          selectedItem={this.state.currentSlide}
          onChange={this.updateCurrentSlide}
          showStatus={false}
          swipeable={false}
          useKeyboardArrows
          showArrows={true}
          showThumbs={false}
          {...this.props}
        >
          <Slide1 onNext={this.next} />
          <Slide2 onPrev={this.prev} onNext={this.next} />
          <Slide3 onPrev={this.prev} onNext={this.next} />
          <Slide4 onPrev={this.prev} onNext={this.next} />
          <Slide5 onPrev={this.prev} onNext={this.next} />
          <Slide6 onPrev={this.prev} onNext={this.next} />
          <Slide7 onPrev={this.prev} />
        </Carousel>
      </div>
    );
  }
}

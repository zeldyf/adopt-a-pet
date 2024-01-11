import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = event => {
      this.setState({
          active: +event.target.dataset.index,
      });
  };
  
  render() {
    const { active } = this.state;
    const { images } = this.props;


    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((img, i) => (
            // eslint-disable-next-line
            <img
              key={img}
              src={img}
              className={i === active ? "active" : ""}
              alt="animal thumbnail"
              onClick={this.handleIndexClick}
              data-index={i}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;

import React from "react";

class Photo extends React.Component {
  render() {
    return(
        <div className="image-container">
          <img src={this.props.photo_file} width="180" height="180" />
        </div>
    );
  }
}

export default Photo;

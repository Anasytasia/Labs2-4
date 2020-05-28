import React from "react";

class Form3 extends React.Component {
  render() {
    return(
      <form onSubmit={this.props.photo_method3}>
        <button>Получить третью картинку</button>
      </form>
    );
  }
}

export default Form3;

import React from "react";

class Form1 extends React.Component {
  render() {
    return(
      <form onSubmit={this.props.photo_method1}>
        <button>Получить первую картинку</button>
      </form>
    );
  }
}

export default Form1;

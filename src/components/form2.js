import React from "react";

class Form2 extends React.Component {
  render() {
    return(
      <form onSubmit={this.props.photo_method2}>
        <button>Получить вторую картинку</button>
      </form>
    );
  }
}

export default Form2;

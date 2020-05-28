import React from "react";
import Form1 from "./components/form1";
import Form2 from "./components/form2";
import Form3 from "./components/form3";
import Info from "./components/info";
import Photo from "./components/photo";

class App extends React.Component {

  state={ photo1: null, photo2: null, photo3: null }

  getting_photo1 = async(e) => {
      e.preventDefault();
      const api_url = await fetch("http://aws.random.cat/meow")
      const data = await api_url.json();
      console.log(data);

      this.setState({
       photo1:  data.file
    });
}

getting_photo2 = async(e) => {
    e.preventDefault();
    const api_url = await fetch("http://aws.random.cat/meow")
    const data = await api_url.json();
    console.log(data);

    this.setState({
     photo2:  data.file
  });
}

getting_photo3 = async(e) => {
    e.preventDefault();
    const api_url = await fetch("http://aws.random.cat/meow")
    const data = await api_url.json();
    console.log(data);

    this.setState({
     photo3:  data.file
  });
}

  render() {
    return(
      <div className="wrapper">
         <Info/>
         <div className="container">
           <div className="row-xs-5">
                <Form1 photo_method1={this.getting_photo1} />
                <Photo photo_file={this.state.photo1}/>
                <Form2 photo_method2={this.getting_photo2} />
                <Photo photo_file={this.state.photo2}/>
                <Form3 photo_method3={this.getting_photo3} />
                <Photo photo_file={this.state.photo3}/>
           </div>
          </div>
      </div>
    );
  }
}

export default App;

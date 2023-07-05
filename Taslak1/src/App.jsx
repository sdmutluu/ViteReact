import React, { Component } from "react"
import  AddUser  from "./Companents/AddUser";


class App extends Component {

constructor(props) {
  super(props);

  this.state = {
    users: [
      {
        id : 1,
        name: "Said",
        email :"coşku@gmail"
      },
      {
        id : 2,
        name: "Saids",
        email :"coşkus@gmail"
      },
      {
        id : 3,
        name: "Saidg",
        email :"coşkus@gmail"
      }
    ]
  };
}

  render() {
    const title = "User app";
    
    return (
      <div className="container">
        <h5>{title}</h5>
       
        <hr/>
        
      </div>
    );
  }
}

export default App;
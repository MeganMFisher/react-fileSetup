import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getNumbers } from './service';


class App extends Component {
  constructor() {
    super()

    this.state = {
      numbers: []
    }
  }

  componentDidMount() {
    getNumbers().then(response => {
      this.setState({
        numbers: response.data
      })
      console.log(this.state.numbers)
    })
  }


  render() {
    
        const numbers = this.state.numbers.map((num, i) => (
            <div key={i}>
                <h3>{ num.num }</h3>
            </div>
        ))


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
           { numbers } 
      </div>
    );
  }
}

export default App;

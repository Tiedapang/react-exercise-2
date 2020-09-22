import React, { Component } from 'react';
import './App.scss';
import HeaderBar from "./components/headerBar";
import Products from './components/products';

class App extends Component {
    state = {
        count: 0,
    };
    buy = () => {
        this.setState({
            count: this.state.count + 1,
        });
        console.log(this.state.count);
    };
  render() {
    return (
      <main className="app">
        <HeaderBar count={this.state.count}/>
        <Products buy={this.buy} />
      </main>
    );
  }
}

export default App;

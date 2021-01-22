import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { SplitMe: null };

  handleClick = async () => {
    const loadedModule = await import('./SplitMe');
    this.setState({
      SplitMe: loadedModule.default,
    });
  };

  render() {
    const { SplitMe } = this.state;
    return (
      <div className="APP">
        <header className="APP-header">
          <img src={logo} className="APP-logo" alt="logo" />
          <p onClick={this.handleClick}> Hello React! 빵 들고가기</p>
          {SplitMe && <SplitMe />}
        </header>
      </div>
    );
  }
}

export default App;
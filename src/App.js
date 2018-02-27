import React, { Component } from 'react';
import BlogMenu from './component/Menu';
import MainComp from './component/MainComp';
class App extends Component {
  render() {
    return (
      <div>
        <BlogMenu />
        <MainComp />
      </div>
    )
  }
}

export default App;

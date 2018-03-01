import React, { Component } from 'react';
import BlogMenuWrap from './container/BlogMenuWrap';
import MainCompWrap from './container/MainCompWrap';
class App extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }
  render() {
    return (
      <div>
        <BlogMenuWrap />
        <MainCompWrap />
      </div>
    )
  }
  componentDidMount(){
    /* window.addEventListener('scroll',()=>{
      this.handleScroll();
    }) */
  }
  handleScroll(){
    if (document.documentElement.scrollTop > 0) {
      this.setState({
        className: 'show'
      })
    } 
  }
}

export default App;

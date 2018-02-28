import React, { Component } from 'react';
import BlogMenu from './component/Menu';
import MainComp from './component/MainComp';
class App extends Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickReset = this.onClickReset.bind(this);
    this.state = {
      menuClose: false
    }
  }
  render() {
    return (
      <div>
        <BlogMenu onclick={this.onClickClose} close={this.state.menuClose===false?'open':'close'} />
        <MainComp expand={this.state.menuClose===true?'true':'false'} onclick={this.onClickReset} />
      </div>
    )
  }
  onClickClose(){
    
    this.setState({
      menuClose: true
    })
  }
  onClickReset(){
    this.setState({
      menuClose: false
    })
  }
}

export default App;

import React, { Component } from 'react';
import logo from './static/image/logo.svg';
import './static/css/App.css';


class Header extends Component {
  constructor () {
    super()
    console.log('construct')
  }

  componentWillMount () {
    console.log('component will mount')
  }

  componentDidMount () {
    console.log('component did mount')
  }

   componentWillUnmount() {
    console.log('component will unmount')
  }
  render () {
    console.log('render')
    return (
      <div>
        <h1 className='title'>React 小书</h1>
      </div>
    )
  }
}


class App extends Component {

 constructor () {
    super();
    this.state = {
      isShowHeader: true
    }
    
  }

  

  handleShowOrHide () {
    this.timex=(new Date()).getTime();
    this.setState({
      isShowHeader: !this.state.isShowHeader
    })
  }

 

  render() {
    console.log('render')

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello React</h2>
        </div>
        <div className="App-intro">         
            {this.state.isShowHeader ? <Header /> : null}
            <button onClick={this.handleShowOrHide.bind(this)}>显示或者隐藏标题</button>      
        </div>
        <h1>{this.timex}</h1>
      </div>
    );
  }
}

export default App;
